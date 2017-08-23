import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

const MOUNT = document.querySelector('#root');
const renderApp = C => render(<C />, MOUNT);
renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    renderApp(App);
  });
}
