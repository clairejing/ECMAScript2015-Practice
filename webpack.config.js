var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                  presets: ['es2015'],
              }
             }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    color: true,
  },
  devtool: 'source-map',
}