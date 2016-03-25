var webpack = require('webpack');

var config = {
  entry: __dirname + 'webComponents/client.js',
  output: {
    path: __dirname, 'public/webjs',
    filename: 'bundle.js'
  }
};

module.exports = config;