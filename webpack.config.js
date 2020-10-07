const HtmlWebpackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	{ CleanWebpackPlugin } = require("clean-webpack-plugin"),
	autoprefixer = require("autoprefixer");

module.exports = {
	entry: {
		js: "./src/index.js"
	},
	output: {
		filename: "[name].[chunkhash].js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.tpl.html$/,
				use: "es6-template-string"
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
          "style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development"
						}
					},
          "css-loader",
          "postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader?bypassOnDebug"]
			},
			{
				test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
				use: "file-loader?name=assets/[name].[ext]"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css",
			chunkFilename: "[id].css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "index.html",
			chunks: ["js"],
			minify: {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true
			}
		})
	]
};
