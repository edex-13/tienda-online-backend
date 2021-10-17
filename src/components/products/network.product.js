const express = require('express');

const router = express.Router();
const response = require('../../middlewares/response.handle.js');
const validatorHandler = require('../../middlewares/validator.handle.js');
const {createProductSchema, searchProductsSchema, deleteProductSchema} = require('./schema.product.js');

const controller = require('./controller.product.js');
router.get(
	'/',
	async (req, res, next) => {
		try {
			const response = await controller.listProducts();
			res.locals.status = 200;
			res.locals.message = response;
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.get(
	'/search',
	validatorHandler(searchProductsSchema, 'query'),
	async (req, res, next) => {
		try {
			const response = await controller.shearchProducts(req.query.title);
			res.locals.status = 200;
			res.locals.message = response;
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.post(
	'/',
	validatorHandler(createProductSchema, 'body'),
	async (req, res, next) => {
		try {
			const response = await controller.createProduct(req.body);
			res.locals.status = 201;
			res.locals.message = response;
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.delete(
	'/:id',
	validatorHandler(deleteProductSchema, 'params'),
	async (req, res, next) => {
		try {
			await controller.deleteProduct(req.params.id);
			res.locals.status = 200;
			res.locals.message = `The product with the id ${req.params.id} has been removed`;
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
module.exports = router;
