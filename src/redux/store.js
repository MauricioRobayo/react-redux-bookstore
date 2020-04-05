import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const initialState = {
  books: [],
  filter: 'All',
};

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, initialState, middleware);

export default store;
