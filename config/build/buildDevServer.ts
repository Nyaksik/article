import {BuildOptions} from "./types";
import { Configuration } from 'webpack-dev-server'

export default function ({ port}: BuildOptions): Configuration {
  return {
    port,
    open: true,
    historyApiFallback: true
  }
}
