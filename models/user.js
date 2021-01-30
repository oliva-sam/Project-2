var bcrypt = require("bcryptjs");

// Creates User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
  // Will compare if unhashed password created by user can be compared to hashed password stored in database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
