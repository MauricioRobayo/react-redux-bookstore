const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((currBook) => currBook.id !== action.book.id);
    case 'LOAD_BOOKS':
      return action.books;
    default:
      return state;
  }
};

export default books;
