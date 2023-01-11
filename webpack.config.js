const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      index: './src/index.js',
      home: './src/home.js',
      contact: './src/contact.js',
      menu: './src/menu.js'
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin ({title: 'Restaurant'})
    ],
    module: {
        rules: [
          {test: /\.css$/i, use: ["style-loader", "css-loader"]},
          {test:/\.ttf$/i,type:'asset/resource'},
          {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',}
        ],
      },
}