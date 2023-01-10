const path = require('path');
const html = require('html-webpack-plugin')
module.exports = {
    entry: '/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new html ({title: 'Trial'})
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}