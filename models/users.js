'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    categoryName: {
      type:DataTypes.STRING,
     get() {
      const rawValue = this.getDataValue("categoryName");
      return rawValue ? rawValue.toUpperCase() : null;
    }
    },
    isAvailable:DataTypes.STRING,
    quentity:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};