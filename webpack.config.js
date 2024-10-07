const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), 
    },
    port: 3001, 
    hot: true, 
    open: true,
    liveReload: true, 
  },
  output: {
    filename: '[name].[contenthash].js', 
    publicPath: 'auto', 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader'], 
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'UserInfoApp', 
      filename: 'remoteEntry.js', 
      exposes: {
        './UserInfoCard': './src/components/UserInfoCard',
        './EditEmailForm': './src/components/EditEmailForm', 
      },
      shared: {
        react: {
          singleton: true,
          eager: true, 
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          eager: true, 
          requiredVersion: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
