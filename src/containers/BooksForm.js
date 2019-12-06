import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import { connect } from 'react-redux'
import { createBook } from '../actions'

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
]

class BooksForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: bookCategories[0],
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { title, category } = this.state
    const { createBook } = this.props
    createBook({
      id: uniqid(),
      title,
      category,
    })
    this.setState({
      title: '',
      category: bookCategories[0],
    })
    event.target.reset()
  }

  renderBooks = () =>
    bookCategories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))

  render() {
    const { title, category } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="category">
          Category:
          <select
            name="category"
            id="category"
            value={category}
            onChange={this.handleChange}
          >
            {this.renderBooks()}
          </select>
        </label>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
})

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BooksForm)
