'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          firstName: "Meet",
          firmName: "Patel Export Pvt. Ltd.",
          email: "meet@gmail.com",
          address: "Atkot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sani",
          firmName: "Rajput Export Pvt. Ltd.",
          email: "sani@gmail.com",
          address: "Ahmedabad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete("Companies", null, {});
     
  }
};
