const bcrypt = require("bcryptjs");

// Creates Trainer model
module.exports = function (sequelize, DataTypes) {
  let Trainer = sequelize.define("Trainer", {
    // Email cannot be null and must be a proper email creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      // Password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  });
  // Will compare if unhashed password created by Trainer can be compared to hashed password stored in database
  Trainer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before a Trainer is created, we will automatically hash their password
  Trainer.addHook("beforeCreate", function (Trainer) {
    Trainer.password = bcrypt.hashSync(
      Trainer.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Trainer;
};
