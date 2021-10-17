const express = require('express');

const router = express.Router();
const response = require('../../middlewares/response.handle.js');
const validatorHandler = require('../../middlewares/validator.handle.js');
const {createProductSchema,searchProductsSchema,deleteProductSchema} = require('./schema.product.js')
router.get(
	'/',
	(req, res, next) => {
		try {
			res.locals.status = 200;
			res.locals.message = 'HOLA DESDE PRODUCTOS';
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.get(
	'/search',
	validatorHandler(searchProductsSchema,'query'),
	(req, res, next) => {
		try {
			res.locals.status = 200;
			res.locals.message = 'HOLA DESDE LA BUSQUEDA DE PRODUCTOS';
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.post(
	'/',
	validatorHandler(createProductSchema,'body'),
	(req, res, next) => {
		try {
			res.locals.status = 200;
			res.locals.message = 'HOLA DESDE AGREGAR UN PRODUCTO ';
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
router.delete(
	'/:id',
	validatorHandler(deleteProductSchema,'params'),
	(req, res, next) => {
		try {
			res.locals.status = 200;
			res.locals.message = 'HOLA DESDE AGREGAR UN ELIMINAR ';
			next();
		} catch (error) {
			next(error);
		}
	},
	response
);
module.exports = router;
