const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { publicFolder, src } = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-warnings',
  devServer: {
    historyApiFallback: true,
    static: publicFolder,
    open: true,
    compress: true,
    port: process.env.PORT || 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                auto: (resourcePath) => resourcePath.endsWith(".module.css"),
                exportGlobals: true,
                localIdentName: "[path][name]__[local]",
              },
              sourceMap: true,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});

