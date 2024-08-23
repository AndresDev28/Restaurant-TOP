const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');
const { type } = require('os');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      // Loader para CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Loader para imágenes
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Loader para archivos CSV
      {
        test: /\.csv$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
