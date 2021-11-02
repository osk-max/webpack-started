const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          minimize: false,
        }
      },
      {
        test: /\.css$/i,
        exclude: /style.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /style.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif$)/i,
        loader: 'file-loader',
        options: { 
          name: '[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new MiniCssExtractPlugin({
      filename:'[name].css', // Darle nombre al nuevo archivo creado en el dist va a ser el mismo que tiene
      ignoreOrder: false // Para que ignore el orden de las importaciones de css
    }),

    new CopyPlugin({
      patterns: [
        {from: 'src/assets/', to: 'assets/'}, // Donde se encuentra el recurso img y luefo su destino 
      ],
    }),
  ]
}

