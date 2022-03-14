module.exports = {
	apps: [
		{
			name: 'happy_birthday ya',
			script: 'server.js',
			instances: 'max',
			autorestart: true,
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
