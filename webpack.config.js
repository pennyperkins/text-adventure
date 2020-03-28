const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ],  
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1234,
  },  
};
