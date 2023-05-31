"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    static associate(models) {
      // define association here
      cards.belongsTo(models.users2, {
        foreignKey: "user_id",
        as: "userDetails",
      });
    }
  }
  cards.init(
    {
      cardName: DataTypes.STRING,
      cardNO: DataTypes.NUMBER,
      user_id:DataTypes.NUMBER
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   references:  "users2s",
      //   referenceskey:"id",
      // },
    },
    {
      sequelize,
      modelName: "cards",
    }
  );
  return cards;
};
