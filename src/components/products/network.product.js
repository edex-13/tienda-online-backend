const express = require('express');

const router = express.Router();
const response = require('../../middlewares/response.handle.js');

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
	'/',
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
