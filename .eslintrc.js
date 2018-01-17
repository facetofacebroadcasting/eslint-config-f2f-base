module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
	},
	extends: ['airbnb-base'],
	rules: {
		indent: [
			'error',
			'tab',
			{
				FunctionExpression: {
					body: 1,
					parameters: 2,
				},
				FunctionDeclaration: {
					body: 1,
					parameters: 2,
				},
				CallExpression: {
					arguments: 1,
				},
				SwitchCase: 1,
			},
		],
		'no-tabs': 'off',
		'no-console': 'error',
	},
};
