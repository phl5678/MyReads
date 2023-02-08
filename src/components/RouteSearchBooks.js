import { useState } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResult from './SearchBooksResult';
import PropTypes from 'prop-types';

const RouteSearchBooks = ({ books, onAddBook, onChangeShelf }) => {
  const [searchBooks, setSearchBooks] = useState([]);

  return (
    <div className="search-books">
      <SearchBooksBar books={books} setSearchBooks={setSearchBooks} />
      <SearchBooksResult
        searchBooks={searchBooks}
        onAddBook={onAddBook}
        onChangeShelf={onChangeShelf}
      />
    </div>
  );
};
RouteSearchBooks.propTypes = {
  books: PropTypes.array,
  onAddBook: PropTypes.func,
  onChangeShelf: PropTypes.func
};
export default RouteSearchBooks;
