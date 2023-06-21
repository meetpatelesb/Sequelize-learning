"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {}
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "user",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );

  
  user.addHook("beforeCreate", async (user, options) => {
    user.password = "admin@123";
  });
  user.addHook("afterCreate", "someCustomName", (user, options) => {
    user.name = "admin";
  });

  return user;
};
