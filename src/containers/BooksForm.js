import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions';
import bookCategories from '../config';
import { searchBooksByTitle } from '../api/googleBooksAPI';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Category',
      autocomplete: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      searchBooksByTitle(value).then((books) => {
        this.setState({
          autocomplete: books.items.map((item) => item.volumeInfo.title),
        });
      });
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({
      id: uniqid(),
      title,
      category,
    });
    this.setState({
      title: '',
      category: 'Categories',
    });
    event.target.reset();
  };

  renderCategories = () =>
    ['Category', ...bookCategories].map((category) => (
      <option
        disabled={category === 'Category'}
        hidden={category === 'Category'}
        key={category}
        value={category}
      >
        {category}
      </option>
    ));

  render() {
    const { title, category, autocomplete } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h4>Add new book</h4>
          <div>
            <div className="autocomplete">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Book title"
                value={title}
                onChange={this.handleChange}
              />
              <ul>
                {autocomplete.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            </div>
            <select
              name="category"
              id="category"
              value={category}
              onChange={this.handleChange}
              className={category === 'Category' ? 'inactive' : ''}
            >
              {this.renderCategories()}
            </select>
            <button type="submit" value="">
              Add book
            </button>
          </div>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
