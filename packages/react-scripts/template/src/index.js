import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import { Provider as MulticatProvider } from 'multicat-react';
import multicatConfig from './multicat.config.js';

import { MDXProvider } from '@mdx-js/tag';
import markdownComponents from './mdx.config.js';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.scss';

render(
  <MulticatProvider config={multicatConfig}>
    <MDXProvider components={markdownComponents}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MDXProvider>
  </MulticatProvider>,
  document.getElementById('root')
);

registerServiceWorker();
