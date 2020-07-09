'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references:{model:'users', key:'id'}
      },
      name: {
        type: Sequelize.DataTypes.STRING
      },
      age: {
        type: Sequelize.DataTypes.INTEGER
      },
      address: {
        type: Sequelize.DataTypes.STRING
      },
      city: {
        type: Sequelize.DataTypes.STRING
      }
    }); 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};