module.exports = {
	entry: ['babel-polyfill', './src/js/index.jsx', './src/css/styles.scss'],

	output: {
		path: `${__dirname}/dist/js`,
		filename: 'bundle.js'
	},

	watch: true,

	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: ['transform-object-rest-spread']
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env'],
							plugins: ['transform-object-rest-spread']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				]
			}
		]
	},

	resolve: { extensions: ['.jsx', '.js'] },
	devtool: 'source-map'
};
