const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 11000;

const metadata = {
  baseUrl: '/',
  ENV: ENV,
  host: HOST,
  port: PORT,
};

module.exports = {
  debug: true,
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: metadata.host,
    port: metadata.port,
    proxy: {
      '/api/*': {
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        target: 'http://localhost:8092',
        secure: false
      }
    }
  },
  devtool: 'source-map',
  entry: {
    'main': './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  module: {
    exprContextCritical: false,
    loaders: [
      { test: /\.css$/, exclude: /node_modules/, loader: 'raw' },
      { test: /\.css$/, exclude: /src/, loader: 'style!css?-minimize' },
      { test: /\.styl$/, loaders: ['to-string-loader', 'css-loader', 'stylus-loader'] },
      { test: /\.html$/, loader: 'raw' },
      {
        test: /\.ts$/,
        loaders: [
          { loader: 'ts', query: { compilerOptions: { noEmit: false } } },
          { loader: 'angular2-template-loader' },
          { loader: 'angular2-router-loader' }
        ]
      },
      { test: /\.woff$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.eot$/, loader: 'file' }
    ]
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.ENV)}}),
    new ProvidePlugin({jQuery: 'jquery', jquery: 'jquery', $: 'jquery'}),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [poststylus([autoprefixer])]
        }
      }
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
