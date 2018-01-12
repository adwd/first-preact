const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const ENV = process.env.NODE_ENV || 'development'

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: ENV === 'development',
})

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: ENV === 'development' ? 'bundle.js' : 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.app.json',
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      minify: { collapseWhitespace: true },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new CopyWebpackPlugin([
      './src/manifest.json',
      {
        from: './src/assets/',
        to: 'assets'
      }
    ]),
    new workboxPlugin({
      globDirectory: 'build',
      globPatterns: ['**/*.{html,js,css}'],
      swDest: 'build/sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
}
