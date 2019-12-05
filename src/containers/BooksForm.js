import React from 'react'
import { connect } from 'react-redux'

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
]

const BooksForm = () => {
  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="category">
        Category:
        <select name="category" id="category">
          {bookCategories.map(category => (
            <option key={`book-category-${category}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" />
    </form>
  )
}

export default connect()(BooksForm)
