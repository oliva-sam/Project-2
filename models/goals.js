// creature goals for the user

module.exports = function (sequelize, DataTypes) {
  let Goal = sequelize.define("Goal", {
    // goals are not completed until user checks them off
    goals: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Goal;
};
