import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
