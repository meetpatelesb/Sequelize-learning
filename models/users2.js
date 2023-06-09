"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users2 extends Model {
    static associate(models) {
      users2.hasOne(models.cards, {
        foreignKey: "user_id",
        as: "cardDetails",
      });

      users2.hasMany(models.Bank, {
        foreignKey: "user_id",
        // as: "bankDetails",
      });
      users2.belongsToMany(models.flat, {
        through: "user_flats",
        foreignKey: "user_id",
        otherKey: "flat_id",
      });
    
    }
  }
  users2.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users2",
    }
  );
  return users2;
};
