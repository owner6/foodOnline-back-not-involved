const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:1oa9x7@localhost:5432/postgres', {
  dialect: 'postgres', 
  logging: false, 
});

module.exports = sequelize;

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}