const express = require('express');

require('dotenv').config();

const config = require('../config')

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
	res.send('Hola Mundo');
});

app.listen(config.api.port, () => {
	console.log(`Api Escuchando en el puerto ${config.api.port}`);
});