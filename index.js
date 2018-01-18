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
	extends: 'airbnb-base',
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
		// Don't force consistent file extensions. We can use any extension or none at all
		'import/extensions': 'off',
		// We can import ComponentName as Redux container and { ComponentName } as React class
		'import/no-named-as-default': 'off',
	},
};
