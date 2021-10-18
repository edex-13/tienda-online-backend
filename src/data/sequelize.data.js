const { Sequelize } = require('sequelize');

const config = require('../../config');
const setupModels = require('./index.data.js');

const URI = config.db.URL

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize)
sequelize.sync()
module.exports = sequelize;