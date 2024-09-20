const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/index.js'
  ],

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader']
      },

      // Подключаем картинки из css
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: './images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    new CleanWebpackPlugin(),

    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
      {
        from: path.resolve(__dirname, 'src/img'),
        to:   path.resolve(__dirname, 'dist/img')
      },
      {
        from: path.resolve(__dirname, 'src/img/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      },
    ]
  })
  ],
};