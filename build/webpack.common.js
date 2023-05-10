const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './client/server/src/main.tsx',
  output: {
    path: resolve(__dirname, '../dist/static'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
    // publicPath: 'http://localhost:8421/',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /.s?css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'less-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json', '.scss'],
    alias: {
      '@': join(__dirname, '../client/react/src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/react/index.html'),
      title: 'react-client',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css'
    })
  ]
}