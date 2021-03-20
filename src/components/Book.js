import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Book = ({ book, handleRemoveBook }) => (
  <div className="Book">
    <img src={book.thumbnail} alt="" />
    <div className="Book-category">{book.category}</div>
    <h2 className="Book-title">{book.title}</h2>
    <div className="Book-id">{book.id}</div>
    <button
      className="Book-remove"
      type="button"
      onClick={() => handleRemoveBook(book)}
    >
      Remove
    </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default memo(Book);
