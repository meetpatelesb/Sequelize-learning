"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "isAvailable", {
      // allowNull: false,
      type: Sequelize.STRING,
      // defaultValue: "yes",
    });
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn("users", "isAvailable")]);
  },
};
