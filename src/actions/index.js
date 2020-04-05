const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

const getRandomBooks = (dispatch) => {
  // https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=free-ebooks&maxResults=40
  fetch('https://openlibrary.org/search.json?q=javascript')
    .then((response) => response.json())
    .then((data) => {
      const books = data.docs
        .filter(
          ({ title, cover_i: id }) => title.toLowerCase() !== 'javascript' && id
        )
        .map(({ cover_i: id, title, type: category }) => ({
          id,
          title,
          category,
        }));
      dispatch({ type: 'LOAD_BOOKS', books });
    });
};

export { createBook, removeBook, changeFilter, getRandomBooks };
