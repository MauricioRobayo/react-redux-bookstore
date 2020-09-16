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
    this.debouncedAutocomplete = this.debounce(this.autocomplete, 250);
  }

  debounce = (func, delay) => {
    let timeout = null;
    return function _(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  autocomplete = (value) => {
    searchBooksByTitle(value).then((books) => {
      this.setState({
        autocomplete: books.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
        })),
      });
    });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.debouncedAutocomplete(value);
    this.setState({
      title: value,
    });
  };

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
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
            <input
              list="titles"
              type="text"
              id="title"
              placeholder="Book title"
              value={title}
              onChange={this.handleInputChange}
              aria-label="title"
            />
            <datalist id="titles">
              {autocomplete.map(({ id, title }) => (
                <option aria-label="title suggestions" key={id} value={title} />
              ))}
            </datalist>
            <select
              name="category"
              aria-label="category"
              id="category"
              value={category}
              onChange={this.handleCategoryChange}
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
