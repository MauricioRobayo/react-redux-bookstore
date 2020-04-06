import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, getRandomBooks, changeFilter } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';

class BooksList extends Component {
  componentDidMount() {
    const { getRandomBooks } = this.props;
    getRandomBooks();
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
          {books.length === 0 ? (
            <div>Loading...</div>
          ) : (
            books
              .filter((book) => filter === book.category || filter === 'All')
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
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
  getRandomBooks: () => dispatch(getRandomBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
