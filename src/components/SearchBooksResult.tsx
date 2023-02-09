import BookItem from './BookItem';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';

type Props = {
  searchBooks: Book[];
  onChangeShelf: (book: Book) => void;
  onAddBook: (book: Book) => void;
};

const SearchBooksResult = ({ searchBooks, onChangeShelf, onAddBook }: Props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.length > 0 ? (
          searchBooks.map((b) => (
            <li key={b.id}>
              {b.shelf ? <BookItem book={b} fromSearch={true} onChangeShelf={onChangeShelf} /> : <BookItem book={b} fromSearch={true} onAddBook={onAddBook} />}
            </li>
          ))
        ) : (
          <span>No result found.</span>
        )}
      </ol>
    </div>
  );
};

SearchBooksResult.propTypes = {
  searchBooks: PropTypes.array,
  onAddBook: PropTypes.func,
  onChangeShelf: PropTypes.func
};
export default SearchBooksResult;
