import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions';
import bookCategories from '../config';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Category',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
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
    const { title, category } = this.state;
    return (
      <footer>
        <form onSubmit={this.handleSubmit}>
          <h4>Add new book</h4>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Book title"
              value={title}
              onChange={this.handleChange}
            />
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
      </footer>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
