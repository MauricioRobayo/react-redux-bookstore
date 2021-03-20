import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import bookCategories from '../config';
import { getRandomBooks, removeBook } from '../redux/actions';

class BooksList extends Component {
  componentDidMount() {
    const { getRandomBooks } = this.props;
    getRandomBooks(bookCategories);
  }

  handleRemoveBook = (book) => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  render() {
    const {
      books: { data, status },
      filter,
    } = this.props;

    const booksList =
      data.length > 1 ? (
        data
          .filter((book) => filter === book.category || filter === 'All')
          .reverse()
          .map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={this.handleRemoveBook}
            />
          ))
      ) : (
        <div>No books :(</div>
      );

    return (
      <>
        <div className="BookList">
          {status === 'pending' || status === 'idle' ? (
            <div>Loading...</div>
          ) : (
            booksList
          )}
        </div>
      </>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  getRandomBooks: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = {
  removeBook,
  getRandomBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
