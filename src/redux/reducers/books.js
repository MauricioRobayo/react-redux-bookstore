import { actionTypes } from '../actions';

const initialState = {
  books: [],
  status: 'pending',
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return { ...state, data: [...state.data, action.book] };
    case actionTypes.REMOVE_BOOK:
      return {
        ...state,
        data: state.data.filter((currBook) => currBook.id !== action.book.id),
      };
    case actionTypes.LOAD_BOOKS:
      return { ...state, data: action.books };
    default:
      return state;
    case actionTypes.SET_BOOKS_STATUS:
      return { ...state, status: action.status };
  }
};

export default books;
