const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
/**
 * [exports description]
 * webpack configuration
 * make ready for production with webpack
 */
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "bundle"),
		filename: "bundle.js",
		assetModuleFilename: "[name][ext]",
		clean: true,
	},
	/**
	 * @var		mixed	modul
	 * define rules for modules
	 */
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|webp|gif|svg)$/,
				type: "asset/resource",
			},
		],
	},
	/**
	 * Devserver configuration for project running in development
	 */
	devServer: {
		static: {
			directory: path.resolve(__dirname, "bundle"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	/**
	 * Give Plugin Suppoort
	 */
	plugins: [
		/**
		 * [HtmlWebpack description]
		 * Html Webpack Plugin configuration
		 */
		new HtmlWebpack({
			title: "Es6 environment setup with Babel and Webpack",
			filename: "index.html",
			template: "public/index.html",
		}),
	],
};
