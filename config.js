module.exports = {
	api: {
		port: process.env.API_PORT || 3000,
	},
	db: {
		User: process.env.User|| 'edex',
		Password: process.env.Password,
		Host: process.env.Host,
		Name: process.env.Name,
		Port: process.env.Port,
	},
};
