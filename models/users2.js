"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users2 extends Model {
    static associate(models) {
      users2.hasOne(models.cards, {
        foreignKey: "user_id" ,as:'cardDetails' ,
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
