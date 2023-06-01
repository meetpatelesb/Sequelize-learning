'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Banks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users2s",
          key: "id",
        },
      },
      bankName: {
        type: Sequelize.STRING
      },
      accountNo: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      accountType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Banks');
  }
};