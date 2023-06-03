"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {}
  }
  comment.init(
    {
      comment: DataTypes.STRING,
      comment_id: DataTypes.INTEGER,
      comment_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
