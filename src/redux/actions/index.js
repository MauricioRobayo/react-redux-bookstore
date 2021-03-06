import { fetchBooksByCategory } from '../../api/googleBooksAPI';

const actionTypes = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_FILTER: 'CHANGE_FILTER',
  LOAD_BOOKS: 'LOAD_BOOKS',
  SET_BOOKS_STATUS: 'SET_BOOKS_STATUS',
};

const createBook = (book) => ({
  type: actionTypes.CREATE_BOOK,
  book,
});

const removeBook = (book) => ({
  type: actionTypes.REMOVE_BOOK,
  book,
});

const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  filter,
});

const setBookStatus = (status) => ({
  type: actionTypes.SET_BOOKS_STATUS,
  status,
});

const getRandomBooks = (categories) => {
  const MAX_BOOKS_PER_CATEGORY = 3;

  function sample(array, size) {
    for (let i = array.length - 1; i > array.length - 1 - size; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(-size);
  }

  function hasThumbnail(book) {
    return Boolean(book.volumeInfo.imageLinks?.smallThumbnail);
  }

  function generateBook(
    {
      id,
      volumeInfo: {
        title,
        imageLinks: { smallThumbnail },
      },
    },
    category
  ) {
    return {
      id,
      title,
      thumbnail: smallThumbnail.replace(/^http:/, 'https:'),
      category,
    };
  }

  return (dispatch) => {
    dispatch(setBookStatus('idle'));
    Promise.all(categories.map(fetchBooksByCategory)).then(
      (booksByCategory) => {
        dispatch({
          type: actionTypes.LOAD_BOOKS,
          books: booksByCategory
            .map(({ items }, index) => {
              const randomSampleSize = Math.floor(
                Math.random() * MAX_BOOKS_PER_CATEGORY + 1
              );
              const categoryBooks = items
                .filter(hasThumbnail)
                .map((book) => generateBook(book, categories[index]));
              return sample(categoryBooks, randomSampleSize);
            })
            .flat(),
        });
        dispatch(setBookStatus('resolved'));
      }
    );
  };
};

export { createBook, removeBook, changeFilter, getRandomBooks, actionTypes };
