const fetchBooks = async (searchparams) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?${searchparams}`
  );
  if (!response.ok) {
    throw new Error(`Something went wrong ${response.statusText}`);
  }
  return response.json();
};

const fetchBooksByCategory = (category) => {
  const searchparams = new URLSearchParams({
    q: `subject:${category}`,
    maxResults: 40,
    fields: 'items(id,volumeInfo(title,imageLinks/smallThumbnail))',
  });
  return fetchBooks(searchparams);
};

export { fetchBooksByCategory }; // eslint-disable-line import/prefer-default-export
