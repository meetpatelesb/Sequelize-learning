"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class paranoid_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paranoid_user.init(
    {
      first: DataTypes.STRING,
      last: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female", "Others"),
    },
    {
      sequelize,
      modelName: "paranoid_user",
      paranoid:true,
      deletedAt:"soft_delete" 
    }
  );
  return paranoid_user;
};
