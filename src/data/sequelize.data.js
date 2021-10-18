const { Sequelize } = require('sequelize');

const config = require('../../config');
const setupModels = require('./index.data.js');

const USER = encodeURIComponent(config.db.User);
const PASSWORD = encodeURIComponent(config.db.Password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db.Host}:${config.db.Port}/${config.db.Name}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize)
sequelize.sync()
module.exports = sequelize;