const {productSchema, Products} = require('../components/products/models.products.js');

const setupModels = (sequelize) => {
	Products.init(productSchema, Products.config(sequelize));
};

module.exports = setupModels;
