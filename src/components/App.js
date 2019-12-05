import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import BooksList from '../containers/BooksList'
import reducers from '../reducers'

// import BooksForm from '../containers/BooksForm';
import './App.css'

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <div className="App">
      <BooksList />
      {/* <BooksForm /> */}
    </div>
  </Provider>
)

export default App
