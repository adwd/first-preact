const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const ENV = process.env.NODE_ENV || 'development'

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: ENV === 'development',
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  ],
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'build'),
  },
}
