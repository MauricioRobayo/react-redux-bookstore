import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'

class BooksList extends Component {
  renderBooks() {
    const { books } = this.props
    return books.map(book => (
      <Book
        key={book.id}
        book={book}
        handleBookRemove={this.handleBookRemove}
      />
    ))
  }

  render() {
    return (
      <table className="BooksList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{this.renderBooks()}</tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
}

export default connect(mapStateToProps)(BooksList)
