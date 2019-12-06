import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'
import { removeBook, changeFilter } from '../actions'
import CategoryFilter from '../components/CategoryFilter'

class BooksList extends Component {
  handleRemoveBook = book => {
    const { removeBook } = this.props
    removeBook(book)
  }

  handleFilterChange = filter => {
    const { changeFilter } = this.props
    changeFilter(filter)
  }

  renderBooks = () => {
    const { books, filter } = this.props
    return books
      .filter(book => filter === book.category || filter === 'All')
      .map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemoveBook={this.handleRemoveBook}
        />
      ))
  }

  render() {
    const { filter } = this.props
    return (
      <>
        <CategoryFilter
          filter={filter}
          handleFilterChange={this.handleFilterChange}
        />
        <table className="BooksList">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{this.renderBooks()}</tbody>
        </table>
      </>
    )
  }
}

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
})

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
})

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
