import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {
  books: {
    data: [],
    status: 'pending',
  },
  filter: 'All',
};

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, initialState, middleware);

export default store;
