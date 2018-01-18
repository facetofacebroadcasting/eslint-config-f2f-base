module.exports = {
	extends: 'f2f-base',
	rules: {
		'no-underscore-dangle': [
			'error',
			{
				// _id for mongodb
				allow: ['_id'],
			},
		],
	},
};
