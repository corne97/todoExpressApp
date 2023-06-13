const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	entry: path.resolve(__dirname, "../src/app/index.tsx"),
	devtool: "inline-source-map",
	stats: "minimal",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(txt|ch8)$/i,
				use: "raw-loader",
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
		plugins: [
			new TsconfigPathsPlugin({}),
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist/public"),
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			publicPath: "/",
			template: path.resolve(__dirname, "../public", "index.html")
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../public"),
					globOptions: {
						ignore: [
							"**/index.html"
						]
					}
				},

			],
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css",
			ignoreOrder: false,
		}),
	]
}