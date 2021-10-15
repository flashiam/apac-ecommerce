"use strict";
module.exports = (sequelize, DataTypes) => {
  const Features = sequelize.define(
    "Features",
    {
      feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ram: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      storage: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      modelno: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "features",
    }
  );
  Features.associate = function (models) {
    // associations can be defined here
    Features.hasMany(models.Product, {
      foreignKey: "feature_id",
    });
  };
  return Features;
};
