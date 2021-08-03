const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, './dist/'),
		clean: true,
	},

	plugins: [new HtmlWebpackPlugin(
		{
			template: path.resolve(__dirname, 'src', 'index.html')
		}
	),
	new webpack.HotModuleReplacementPlugin()
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: 'svg-inline-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
			},
		],
	},

	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
}



module.exports = config;