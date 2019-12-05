import React from 'react'
import BooksList from '../containers/BooksList'

import BooksForm from '../containers/BooksForm'
import './App.css'

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
)

export default App
