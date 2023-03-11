import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildMode, type BuildPath } from './config/build/types'
import path from 'path'
import { type Configuration } from 'webpack'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend'
  })
}
