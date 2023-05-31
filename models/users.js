"use strict";
const { Model } = require("sequelize");
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
  users.init(
    {
      categoryName: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue("categoryName");
          return rawValue ? "Mr." + rawValue.toUpperCase() : null;
        },
      },
      isAvailable: {
        type: DataTypes.STRING,
        // set(value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
        //   this.setDataValue("isAvailable", "is" + value);
        // },
      },
      quentity: DataTypes.INTEGER,
      categoryIsAvailable: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.categoryName} is ${this.isAvailable}`;
        },
        set(value) {
          throw new Error("Do not try to set the `fullName` value!");
        },
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
