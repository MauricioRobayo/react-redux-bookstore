import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'
import { removeBook } from '../actions'

class BooksList extends Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props
    removeBook(book)
  }

  render() {
    const { books } = this.props
    return (
      <table className="BooksList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={this.handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books,
})

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
})

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
