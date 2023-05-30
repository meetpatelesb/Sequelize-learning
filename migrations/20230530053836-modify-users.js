'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('users','quentity',{
    type:Sequelize.INTEGER,
    allowNull:false,
  })
     
  },

  async down (queryInterface, Sequelize) {
 return Promise.all([queryInterface.removeColumn('users','quentity')]);
  
  }
};
