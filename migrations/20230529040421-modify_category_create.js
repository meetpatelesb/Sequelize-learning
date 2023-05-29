"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("categories", "createdAt"),
      queryInterface.removeColumn("categories", "updatedAt"),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "categories",
        "createdAt",
        {
          type: Sequelize.DATE,
        },
        queryInterface.addColumn("categories", "updatedAt", {
          type: Sequelize.DATE,
        })
      ),
    ]);
  },
};
