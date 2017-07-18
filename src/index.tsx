import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import 'isomorphic-fetch';
import 'normalize.css';

import './assets/css/font.css';
import './assets/css/reset.scss';
import './assets/css/common.scss';
import registerServiceWorker from './registerServiceWorker';
import Routers from './routers';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
