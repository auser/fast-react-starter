const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const dotenv = require('dotenv');

const rootPath = path.join(__dirname, '..');
const rel = p => path.join(rootPath, p);

dotenv.config({path: rel(`.env.${NODE_ENV}`)});
dotenv.config({path: rel('.env')});

const webpack = require('webpack');
const paths = require('./paths.config');

module.exports = {
  entry: [path.join(paths.src, 'app.js'), path.join(paths.src, 'app.scss')],
  output: {
    publicPath: paths.public,
    filename: '[hash].js',
    chunkFilename: '[hash].[id].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: paths.components,
      utils: paths.utils,
      lib: paths.lib,
      pages: paths.pages,
      hocs: paths.hocs
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        include: paths.src
      },
      {
        test: /\.(tsx?)$/,
        loader: 'awesome-typescript-loader',
        include: paths.src
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('NODE_ENV'),
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL)
      }
    })
  ]
};
