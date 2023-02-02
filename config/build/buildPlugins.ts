import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function ({paths}: BuildOptions): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({template: paths.html}),
		new MiniCssExtractPlugin({ filename: 'css/[name].[fullhash].css', chunkFilename: 'css/[name].[fullhash].css' }),
		new webpack.ProgressPlugin()
	]
}
