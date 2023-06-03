'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
   
    static associate(models) {
     video.hasMany(models.comment, {
       foreignKey: "comment_id",
       constraints: false,
       scope: {
         comment_type: "video",
       },
     });
    }
  }
  video.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'video',
  });
  return video;
};