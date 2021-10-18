const logError = (err, req, res, next) => {
	console.error('SUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU:' + err);
	next(err);
};

const userError = (err, req, res, next) => {
	const status = err.status || 400;
	const message = err.message || 'An error has occurred';
	if (err.isUserError) {
		res.status(status).json({
			error: true,
			status,
			message,
		});
	}
	if (err.parent) {
		const {fields, parent} = err;
		res.status(status).json({
			error: true,
			status,
			message:{
				error:parent.detail,
				field: fields,
			},
		});
	}
	next(err);
};

const internalError = (err, req, res, next) => {
	const status = 500;
	const message = 'An error has occurred';
	res.status(status).json({
		error: true,
		status,
		message,
	});
};

module.exports = {logError, userError, internalError};
