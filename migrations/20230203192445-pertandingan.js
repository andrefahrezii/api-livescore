'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pertandingan', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      klubA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scoreA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      klubB: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scoreB: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('pertandingan');

  }
};
