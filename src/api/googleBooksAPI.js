const fetchBooks = async (searchParams) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?${searchParams}`
  );
  if (!response.ok) {
    throw new Error(`Something went wrong ${response.statusText}`);
  }
  return response.json();
};

const fetchBooksByCategory = (category) => {
  const searchParams = new URLSearchParams({
    q: `subject:${category}`,
    maxResults: 40,
    fields: 'items(id,volumeInfo(title,imageLinks/smallThumbnail))',
  });
  return fetchBooks(searchParams);
};

const searchBooksByTitle = (title) => {
  const searchParams = new URLSearchParams({
    q: `intitle:${title}`,
    fields: 'totalItems,items(id,volumeInfo/title)',
  });
  return fetchBooks(searchParams);
};

export { fetchBooksByCategory, searchBooksByTitle };
