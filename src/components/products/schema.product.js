const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().min(2).max(15);
const description = Joi.string().min(30).max(60);
const routeImage = Joi.string().uri();
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  routeImage: routeImage.required(),
  price: price.required(),
});

const searchProductsSchema = Joi.object({
  title: title.required(),
});


const deleteProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, searchProductsSchema ,deleteProductSchema}