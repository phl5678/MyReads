import Book from './BookItem';
import PropTypes from 'prop-types';

const Bookshelf = ({ title, books, onChangeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((b) => (
            <li key={b.id}>
              <Book book={b} onChangeShelf={onChangeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  onChangeShelf: PropTypes.func
};
export default Bookshelf;
