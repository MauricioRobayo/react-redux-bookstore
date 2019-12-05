import { combineReducers } from 'redux'
import books from './book'
import filter from './filter'

const reducers = combineReducers({
  books,
  filter,
})

export default reducers
