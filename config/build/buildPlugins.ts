import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default function ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[fullhash].css', chunkFilename: 'css/[name].[fullhash].css' }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })

  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
      new ReactRefreshPlugin({ overlay: false }),
      new HotModuleReplacementPlugin()
    )
  }

  return plugins
}
