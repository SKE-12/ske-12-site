require('dotenv').config()

module.exports = {
	options: {
		output: 'public',
		node_modules: 'src',
	},
	use: [
		[
			'@neutrinojs/standardjs',
			{
				eslint: {
					rules: {
						indent: ['error', 'tab'],
						'react/jsx-indent': ['error', 'tab'],
						'react/jsx-indent-props': ['error', 'tab'],
						'no-tabs': 'off',
						'comma-dangle': ['error', 'always-multiline'],
					},
				},
			},
		],
		[
			'@neutrinojs/react',
			{
				html: {
					title: 'ske-12-site',
				},
			},
		],
		'@neutrinojs/jest',
		[
			'@neutrinojs/env',
			[
				'FIRE_API_KEY',
				'FIRE_AUTH_DOMAIN',
				'FIRE_DB_URL',
				'FIRE_PROJECT_ID',
				'FIRE_STOREAGE_BUCKET',
				'FIRE_MSGS_ID',
			],
		],
	],
}
