"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bank.belongsTo(models.users2, {
        foreignKey: "user_id",
        as: "userDetails",
      });
    }
  }
  Bank.init(
    {
      bankName: DataTypes.STRING,
      user_id: DataTypes.NUMBER,
      accountNo: DataTypes.STRING,
      city: DataTypes.STRING,
      accountType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bank",
    }
  );
  return Bank;
};
