const { Sequelize } = require('sequelize');


const setupModels = require('./index.data.js');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
	dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
	}
});

setupModels(sequelize)

sequelize.sync()
module.exports = sequelize;