'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        "categories",
        [
          {
            categoryName: "Electronics",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            categoryName: "Grocery",
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete("categories", null, {});
     
  }
};
