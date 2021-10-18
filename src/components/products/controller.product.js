const {models} = require('../../data/sequelize.data.js');

const listProducts = async () => {
	const rta = await models.products.findAll();
	return rta;
};
const shearchProducts = async (title) => {
	const products = await listProducts();
	const search = products.filter((product) => {
		const titleToSearch = title.toLowerCase();
		const productTitle = product.title.toLowerCase();
		if (productTitle.includes(titleToSearch)) {
			return product;
		}
	});
	return search;
};
const createProduct = async (newUserData) => {
	const rta = await models.products.create(newUserData);
	return rta;
};
const deleteProduct = async (id) => {
	const product = await models.products.findByPk(id);
	if (!product) {
		throw {
			isUserError:true,
			status:400,
			message: `The id ${id} does not exist`
		}
	}product.destroy();
	return {id};
};
module.exports = {
	listProducts,
	shearchProducts,
	createProduct,
	deleteProduct,
};
