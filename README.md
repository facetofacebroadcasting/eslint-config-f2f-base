# eslint-config-f2f-base
Base configuration for F2F javascript code. Requires a few peer dependencies.

## Getting Started
```shell
npm install --save-dev --save-exact eslint-config-f2f-base

# Install peer dependencies
npm install --save-dev --save-exact eslint@3.19.0
npm install --save-dev --save-exact eslint-plugin-import@2.8.0
```

## Usage
#### Node
```javascript
// Your .eslintrc.js file
module.exports = {
	extends: ['f2f-base'],
};

```

#### Node
Custom linter for a nodejs environment. Use this for server-side code.
```javascript
module.exports = {
	extends: ['f2f-base/node'],
};
```