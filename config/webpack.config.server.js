const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: path.resolve(__dirname, "../src/server/index.ts"),
	devtool: "inline-source-map",
	stats: "minimal",
	mode: "development",
	target: "node",
	node: {
		global: false,
		__filename: false,
		__dirname: false,
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
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
		path: path.resolve(__dirname, "../dist")
	}
}