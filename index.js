// Built on top of the airbnb base linter. Require and add it manually so users
// of this module don't have to install airbnb as a peerDependency.
const airbnb = require('eslint-config-airbnb-base');

module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true,
	},
	parserOptions: airbnb.parserOptions,
	extends: airbnb.extends.map(require.resolve),
	plugins: ['import'],
	rules: Object.assign({}, airbnb.rules, {
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
	}),
};
