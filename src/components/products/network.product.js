const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	try {
		res.send('HOLA DESDE PRODUCTOS');
	} catch (error) {
		next(error);
	}
});
router.get('/search', (req, res, next) => {
	try {
		res.send('HOLA DESDE LA BUSQUEDA DE PRODUCTOS');
	} catch (error) {
		next(error);
	}
});
router.post('/', (req, res, next) => {
	try {
		res.send('HOLA DESDE AGREGAR UN PRODUCTO ');
	} catch (error) {
		next(error);
	}
});
router.delete('/', (req, res, next) => {
	try {
		res.send('HOLA DESDE AGREGAR UN ELIMINAR ');
	} catch (error) {
		next(error);
	}
});
module.exports = router;
