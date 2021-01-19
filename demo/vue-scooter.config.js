const path = require('path');
module.exports = {
  workspace: './src',
  build: {
    dist: './dist',
  },
  devServer: {
    port: 8080,
    proxy: {},
  },
};
