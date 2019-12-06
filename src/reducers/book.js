const books = (state = [], { type, book }) => {
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, book]
    case 'REMOVE_BOOK':
      return state.filter(currBook => currBook.id !== book.id)
    default:
      return state
  }
}

export default books
