"use strict";

const { DATE } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          productName: "tubelight",
          productId: 1003,
          price: 100,
          quentity: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "chili",
          productId: 2002,
          price: 15,
          quentity: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "camera",
          productId: 1004,
          price: 1800,
          quentity: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
