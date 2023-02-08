import { type BuildOptions } from './types'
import { type Configuration } from 'webpack-dev-server'

export default function ({ port }: BuildOptions): Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
