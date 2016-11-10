module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	extends: 'eslint:recommended',
	env: {
		'browser': true,
		'embertest': true
	},
	rules: {
		// error
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'indent': ['error', 'tab'],
		'semi': ['error', 'never'],
		'camelcase': ['error', { properties: 'always' }],
		'no-var': 'error',
		'complexity': ['error', { max: 3 }],
		'eqeqeq': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-magic-numbers': ['error', {
			'ignore': [0,1],
			'ignoreArrayIndexes': true,
			'enforceConst': true
		}],
		'quotes': ['error', 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		// code style warning, to be debated
		'no-loop-func': 'warn',
		'max-statements': ['warn', { max: 10 }],
		'max-params': ['warn', { max: 4 }],
		'max-len': ['warn', 120],
		'max-depth': ['warn', { max: 4 }]
	},
	globals: {
		"$": true
	}
};
