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
      .map(({ items }, index) =>
        items
          .filter(
            ({ volumeInfo: { imageLinks: { smallThumbnail = '' } = {} } }) =>
              smallThumbnail !== ''
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 3 + 1))
          .map(
            ({
              id,
              volumeInfo: {
                title,
                imageLinks: { smallThumbnail },
              },
            }) => ({
              id,
              title,
              thumbnail: smallThumbnail.replace(/^http:/, 'https:'),
              category: bookCategories[index],
            })
          )
      )
      .flat();
    dispatch({ type: 'LOAD_BOOKS', books });
  });
};

export { createBook, removeBook, changeFilter, getRandomBooks };
