import React from 'react';
import { render } from 'react-snapshot';
import { Provider as MulticatProvider } from 'multicat-react';
import multicatConfig from './multicat.config.js';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(
  <MulticatProvider config={multicatConfig}>
    <App />
  </MulticatProvider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <MulticatProvider config={multicatConfig}>
        <App />
      </MulticatProvider>,
      rootEl
    );
  });
}

registerServiceWorker();
