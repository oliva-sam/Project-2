module.exports = function (sequelize, DataTypes) {
  let Goals = sequelize.define("Goals", {
    goals: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Goals.associate = function (models) {
    Goals.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Goals;
};
