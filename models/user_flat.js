"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }
  user_flat.init(
    {
      user_id: DataTypes.INTEGER,
      flat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_flat",
    }
  );
  return user_flat;
};
