module.exports = {
	env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
	api: {
		port: process.env.PORT || 3000,
	},
	db: {
		User: process.env.User|| 'edex',
		Password: process.env.Password,
		Host: process.env.Host,
		Name: process.env.Name,
		Port: process.env.Port,
		URL: process.env.DATABASE_URL,
	},
};
