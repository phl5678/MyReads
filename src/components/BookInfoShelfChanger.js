import { Bookshelfs } from './RouteBookshelfList';
import PropTypes from 'prop-types';

const BookInfoShelfChanger = ({ book, onChangeShelf, onAddBook }) => {
  const handleChange = (e) => {
    book.shelf = e.target.value;
    onChangeShelf ? onChangeShelf(book) : onAddBook(book);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf && book.shelf !== 'none' ? book.shelf : 'label'}
        onChange={handleChange}>
        <option value="label" disabled>
          {book.shelf && book.shelf !== 'none' ? 'Move to...' : 'Add to...'}
        </option>
        {Bookshelfs.map((bs) => (
          <option key={bs.key} value={bs.key}>
            {bs.title}
          </option>
        ))}
        {book.shelf && book.shelf !== 'none' ? <option value="none">None</option> : ''}
      </select>
    </div>
  );
};
BookInfoShelfChanger.propTypes = {
  book: PropTypes.object,
  onChangeShelf: PropTypes.func,
  onAddBook: PropTypes.func
};
export default BookInfoShelfChanger;
