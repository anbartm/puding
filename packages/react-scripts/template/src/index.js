import React from 'react';
import { render } from 'react-snapshot';
import { Provider as MulticatProvider } from 'multicat-react';
import multicatConfig from './multicat.config.js';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <MulticatProvider config={multicatConfig}>
    <App />
  </MulticatProvider>,
  document.getElementById('root')
);

registerServiceWorker();
