const webpack = require("webpack");
const path = require("path");

module.exports = {
	context: __dirname + "/src",
	entry: {
		main: path.resolve(__dirname, "src/js") + "/global-api.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "js/shlpainter.bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: "babel-loader",
				options: {
					presets: ["es2015"]
				}
			}]
		}, {
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
	}
}