'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Annotations', [
        {userId: 1, songId: 1, body: 'Well said, well said indeed', startPos: 18, endPos: 66, createdAt: new Date(), updatedAt: new Date() },
        {userId: 2, songId: 1, body: 'What does that even mean?', startPos: 278, endPos: 313, createdAt: new Date(), updatedAt: new Date() },
        {userId: 3, songId: 1, body: 'Yeah totally, totally...', startPos: 1791, endPos: 1835, createdAt: new Date(), updatedAt: new Date() },
        {userId: 1, songId: 2, body: 'Donda donda dondè?', startPos: 55, endPos: 70, createdAt: new Date(), updatedAt: new Date() },
        {userId: 2, songId: 2, body: "I'd go to jail with Kanye", startPos: 709, endPos: 743, createdAt: new Date(), updatedAt: new Date() },
        {userId: 3, songId: 2, body: 'Speak for yourself Kanye', startPos: 502, endPos: 530, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Annotations', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
