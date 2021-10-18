const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCTS_TABLE = 'products';

const productSchema = {
	id: {
		allowNull: false,
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
		unique: true,
	},
	title: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
	},
	description: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	routeImage: {
		allowNull: false,
		field: 'route_image',
		type: DataTypes.STRING,
	},
	price: {
		allowNull: false,
		type: DataTypes.FLOAT,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'create_at',
		defaultValue: Sequelize.NOW,
	},
};

class Products extends Model {
	static config(sequelize) {
		return {
			sequelize,
			tableName: PRODUCTS_TABLE,
			modelName: 'products',
			timestamps: false,
		};
	}
}

module.exports = {PRODUCTS_TABLE, productSchema, Products};
