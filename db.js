const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:1oa9x7@localhost:5432/postgres', {
  dialect: 'postgres', 
  logging: false, 
});

module.exports = sequelize;
