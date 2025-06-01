// Only keep this function for Google Books API search
export const searchGoogleBooks = (query: string) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
};
