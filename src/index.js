const express = require('express');

require('dotenv').config();

const cors = require('cors');

const config = require('../config');

const app = express();
const products = require('./components/products/network.product.js');
const {logError, userError, internalError} = require('./middlewares/error.handle.js');
const response = require('./middlewares/response.handle.js');

const whitelist = ['http://edex13.me/'];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Acceso no permitido'));
		}
	},
};
app.use(cors(options));

app.use(express.json());

app.use('/products', products);
app.use((req, res, next) => {
	next({
		isUserError: true,
		status: 404,
		message: 'resource not found',
	});
});
app.use(logError);
app.use(userError);
app.use(internalError);

app.listen(config.api.port, () => {
	console.log(`Api Escuchando en el puerto ${config.api.port}`);
});
