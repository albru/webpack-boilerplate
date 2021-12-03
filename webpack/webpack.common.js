const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const { build, publicPath, entry, publicFolder, src } = require('./paths');

const { DefinePlugin } = webpack;

module.exports = {
  entry,
  output: {
    filename: '[name].bundle.js',
    path: build,
    publicPath,
  },
  target: 'web',
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicFolder,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack-boilerplate',
      favicon: src + '/shared/lib/images/favicon.png',
      template: src + '/app/index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/src': src,
      '@/app': src + '/app',
      '@/entities': src + '/entities',
      '@/features': src + '/features',
      '@/pages': src + '/pages',
      '@/shared': src + '/shared',
    },
  },
};
