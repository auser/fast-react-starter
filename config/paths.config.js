const path = require('path');
const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';

let publicPaths = {
  development: '/',
  ghpages: '/repository/',
  preprod: '/',
  production: '/'
};

const src = (...p) => path.join(__dirname, '..', 'src', ...p);

module.exports = {
  // Used by the devServer and base href
  public: publicPaths[appEnv] || publicPaths.development,

  // Used by the module bundler
  root: path.join(__dirname, '..'),
  src: path.join(__dirname, '..', 'src'),
  build: path.join(__dirname, '..', 'build'),
  static: path.join(__dirname, '..', 'static'),
  config: path.join(__dirname, '..'),

  // Node-Resolve aliases
  components: src('components'),
  utils: src('utils'),
  lib: src('lib'),
  pages: src('pages'),
  hocs: src('hocs'),

  // Generating page from content and layouts
  layouts: path.join(__dirname, '..', 'src', 'layouts'),
  partials: path.join(__dirname, '..', 'src', 'layouts')
};
