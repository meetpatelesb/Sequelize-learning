"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          firstName: "Meet",
          lastName: "Vaghasiya",
          email: "meet@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sanisinh",
          lastName: "Rajput",
          email: "sani@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
