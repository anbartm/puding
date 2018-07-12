import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'multicat-react';
import './index.scss';
import App from './App';
import multicatConfig from './multicat.config.js';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(
  <Provider config={multicatConfig}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Provider config={multicatConfig}>
        <App />
      </Provider>,
      rootEl
    );
  });
}

registerServiceWorker();
