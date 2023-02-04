'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livescore', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      klub: {
        type: Sequelize.STRING,
      },
      ma: {
        type: Sequelize.INTEGER,
      },
      me: {
        type: Sequelize.INTEGER,
      },
      s: {
        type: Sequelize.INTEGER,
      },
      k: {
        type: Sequelize.INTEGER,
      },
      gm: {
        type: Sequelize.INTEGER,
      },
      gk: {
        type: Sequelize.INTEGER,
      },
      point: {
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable('livescore');

  }
};
