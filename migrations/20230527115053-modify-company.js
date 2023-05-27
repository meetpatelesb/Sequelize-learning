'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Companies','address',{
   
      allowNull:false,
      type:Sequelize.STRING,
    }
   );
   await queryInterface.removeColumn("Companies", "gstNo");
  },

   down (queryInterface, Sequelize) {
   return Promise.all([
     queryInterface.removeColumn("Companies", "address"),
     queryInterface.addColumn("Companies", "gstNo", {
       type: Sequelize.INTEGER,
     }),
   ]); }
};
