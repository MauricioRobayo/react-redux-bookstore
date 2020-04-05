import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import './index.scss';

const initialState = {
  books: [],
  filter: 'All',
};

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, initialState, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
