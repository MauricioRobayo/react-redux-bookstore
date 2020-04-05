import bookCategories from '../../config';

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
  const fetchCategory = async (category) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`
    );
    return response.json();
  };

  Promise.all(bookCategories.map(fetchCategory)).then((booksByCategory) => {
    const books = booksByCategory
      .map(({ items }) =>
        items.map(
          (
            {
              id,
              volumeInfo: {
                title,
                imageLinks: { smallThumbnail: thumbnail = '' } = {},
              },
            },
            index
          ) => ({
            id,
            title,
            thumbnail,
            category: bookCategories[index],
          })
        )
      )
      .flat();
    dispatch({ type: 'LOAD_BOOKS', books });
  });
};

export { createBook, removeBook, changeFilter, getRandomBooks };
