import React from 'react'
import Header from './Header'
import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'

const App = () => (
  <div className="App">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
)

export default App
