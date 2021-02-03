const bcrypt = require("bcryptjs");

// Creates Client model
module.exports = function (sequelize, DataTypes) {
  let Client = sequelize.define("Client", {
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
  // Will compare if unhashed password created by Client can be compared to hashed password stored in database
  Client.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before a Client is created, we will automatically hash their password
  Client.addHook("beforeCreate", function (Client) {
    Client.password = bcrypt.hashSync(
      Client.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Client;
};
