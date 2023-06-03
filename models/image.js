'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
   
    static associate(models) {
     image.hasMany(models.comment, {
       foreignKey: "comment_id",
       constraints:false,
       scope:{
        comment_type:"image"
       }
     });
    }
  }
  image.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};