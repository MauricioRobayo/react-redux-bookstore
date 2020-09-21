import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, getRandomBooks } from '../redux/actions';
import bookCategories from '../config';

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
    const { books, filter } = this.props;
    return (
      <>
        <div className="BookList">
          {books.length === 0 ? (
            <div>Loading...</div>
          ) : (
            books
              .filter((book) => filter === book.category || filter === 'All')
              .reverse()
              .map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  handleRemoveBook={this.handleRemoveBook}
                />
              ))
          )}
        </div>
      </>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
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
