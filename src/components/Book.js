import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button">remove</button>
    </td>
  </tr>
)

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
}

export default Book
