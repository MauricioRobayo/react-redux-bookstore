import { actionTypes } from '../actions';

const books = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return [...state, action.book];
    case actionTypes.REMOVE_BOOK:
      return state.filter((currBook) => currBook.id !== action.book.id);
    case actionTypes.LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default books;
