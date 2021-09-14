'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Comments', [
        {userId:1, songId:1, body:"He's Baby Keem", createdAt: new Date(), updatedAt: new Date() },
        {userId:2, songId:1, body:"Vibessssss", createdAt: new Date(), updatedAt: new Date() },
        {userId:2, songId:2, body:"Donda... Donda donda donda", createdAt: new Date(), updatedAt: new Date() },
        {userId:1, songId:2, body:"I can't see his album cover.", createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Comments', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
