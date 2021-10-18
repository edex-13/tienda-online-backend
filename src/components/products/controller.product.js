const {v4: uuidv4} = require('uuid');

// const table = 'user';

const {models}  = require('../../data/sequelize.data.js')

module.exports = {
	listProducts : async () => {
		const rta = await models.products.findAll()
    return rta;
	},
	shearchProducts : (title) => {
    return title;
	},
	createProduct : (newUserData) => {
		const newProduct = {
			id:uuidv4(),
			...newUserData
		};
		return newProduct
	},
  deleteProduct: (id)=>{
    return id;
  }
};