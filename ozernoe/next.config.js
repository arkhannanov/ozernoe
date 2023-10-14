const path = require('path');

module.exports = {
	trailingSlash: false,
	webpack: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	/**
	 * We specify which domains are allowed to be optimized.
	 * This is needed to ensure that external urls can't be abused.
	 * @see https://nextjs.org/docs/basic-features/image-optimization#domains
	 */
}