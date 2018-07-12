import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'multiplytix-react';
import './index.scss';
import App from './App';
import multiplytixConfig from './multiplytix.config.js';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(
  <Provider config={multiplytixConfig}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Provider config={multiplytixConfig}>
        <App />
      </Provider>,
      rootEl
    );
  });
}

registerServiceWorker();
