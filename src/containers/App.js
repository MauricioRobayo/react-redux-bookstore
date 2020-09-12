import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';
import { changeFilter } from '../redux/actions';

class App extends React.Component {
  handleFilterChange = (filter) => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  };

  render() {
    const { filter } = this.props;
    return (
      <div className="App">
        <Header>
          <CategoryFilter
            filter={filter}
            handleFilterChange={this.handleFilterChange}
          />
        </Header>
        <BooksForm />
        <BooksList />
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
