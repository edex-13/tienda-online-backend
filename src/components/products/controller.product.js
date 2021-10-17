const {v4: uuidv4} = require('uuid');

// const table = 'user';

module.exports = {
	listProducts : () => {
    return 'Lista de productos'
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