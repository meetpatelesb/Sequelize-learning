'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    groups.belongsTo(models.person, {
      foreignKey: "person_id",
    });
    }
  }
  groups.init({
    person_id:DataTypes.INTEGER,
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};