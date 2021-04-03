'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Counters', {
      sessionID: {
        allowNull: false,
        unique: true,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lastUpdate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Counters');
  }
};