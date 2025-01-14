import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import think from 'redux-thunk';

import App from './App';

import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
