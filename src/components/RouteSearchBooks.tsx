import { useState } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResult from './SearchBooksResult';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';

type Props = {
  books: Book[];
  onChangeShelf: (book: Book) => void;
  onAddBook: (book: Book) => void;
};

const RouteSearchBooks = ({ books, onChangeShelf, onAddBook }: Props) => {
  const [searchBooks, setSearchBooks] = useState<Book[]>([]);

  return (
    <div className="search-books">
      <SearchBooksBar books={books} setSearchBooks={setSearchBooks} />
      <SearchBooksResult searchBooks={searchBooks} onAddBook={onAddBook} onChangeShelf={onChangeShelf} />
    </div>
  );
};
RouteSearchBooks.propTypes = {
  books: PropTypes.array,
  onAddBook: PropTypes.func,
  onChangeShelf: PropTypes.func
};
export default RouteSearchBooks;
