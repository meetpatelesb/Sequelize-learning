"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      flat.belongsToMany(models.users2, {
        through: "user_flats",
        foreignKey:"flat_id",
        otherKey:"user_id",
        
      });
    }
  }
  flat.init(
    {
      
      // user_id: DataTypes.INTEGER,
      flatName: DataTypes.STRING,
      city: DataTypes.STRING,
      rent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "flat",
    }
  );
  return flat;
};
