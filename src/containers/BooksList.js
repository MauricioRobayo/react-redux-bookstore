import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, createBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';

class BooksList extends Component {
  componentDidMount() {
    const { createBook } = this.props;
    const books = [
      {
        id: uniqid(),
        title: 'JS: The Good Parts',
        category: 'Learning',
      },
      {
        id: uniqid(),
        title: 'Eloquent JS',
        category: 'Learning',
      },
      {
        id: uniqid(),
        title: "You don't know JS",
        category: 'History',
      },
      {
        id: uniqid(),
        title: 'JS Ninja',
        category: 'Biography',
      },
    ];
    books.forEach(createBook);
  }

  handleRemoveBook = (book) => {
    const { removeBook } = this.props;
    removeBook(book);
  };

  handleFilterChange = (filter) => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  };

  render() {
    const { books, filter } = this.props;
    return (
      <>
        <Header>
          <CategoryFilter
            filter={filter}
            handleFilterChange={this.handleFilterChange}
          />
        </Header>
        <div className="BookList">
          {books
            .filter((book) => filter === book.category || filter === 'All')
            .map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={this.handleRemoveBook}
              />
            ))}
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
  createBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  createBook: (book) => dispatch(createBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
