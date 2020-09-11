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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function sample(array, size) {
    return shuffle(array).slice(0, size);
  }

  return (dispatch) => {
    Promise.all(categories.map(fetchCategory)).then((booksByCategory) => {
      const books = booksByCategory
        .map(({ items }, index) =>
          sample(
            items
              .filter(
                ({
                  volumeInfo: { imageLinks: { smallThumbnail = '' } = {} },
                }) => smallThumbnail !== ''
              )
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
                  category: categories[index],
                })
              ),
            Math.floor(Math.random() * MAX_BOOKS_PER_CATEGORY + 1)
          )
        )
        .flat();
      dispatch({ type: actionTypes.LOAD_BOOKS, books });
    });
  };
};

export { createBook, removeBook, changeFilter, getRandomBooks, actionTypes };
