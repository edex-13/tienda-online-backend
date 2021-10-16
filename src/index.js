const express = require('express');

require('dotenv').config();

const config = require('../config');

const app = express();
const products = require('./components/products/network.product.js');
const {logError, userError, internalError} = require('./middlewares/error.handle.js');
const response = require('./middlewares/response.handle.js');

app.use(express.json());

app.use('/products', products);
app.use((req , res , next)=>{
  next({
    isUserError:true ,
    status: 404,
    message: 'resource not found'
  })
})
app.use(logError);
app.use(userError);
app.use(internalError);


app.listen(config.api.port, () => {
	console.log(`Api Escuchando en el puerto ${config.api.port}`);
});