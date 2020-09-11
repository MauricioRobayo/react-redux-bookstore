const actionTypes = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_FILTER: 'CHANGE_FILTER',
  LOAD_BOOKS: 'LOAD_BOOKS',
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

const getRandomBooks = (categories) => {
  const fetchCategory = async (category) => {
    const searchparams = new URLSearchParams({
      q: `subject:${category}`,
      maxResults: 40,
      fields: 'items(id,volumeInfo(title,imageLinks/smallThumbnail))',
    });
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${searchparams}`
    );
    return response.json();
  };

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
    Promise.all(categories.map(fetchCategory)).then((booksByCategory) => {
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
    });
  };
};

export { createBook, removeBook, changeFilter, getRandomBooks, actionTypes };
