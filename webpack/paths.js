const path = require('path');

module.exports = {
  publicPath: '/',

  // Entry point
  entry: path.resolve(__dirname, '../src/index.tsx'),

  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  publicFolder: path.resolve(__dirname, '../public'),
};
