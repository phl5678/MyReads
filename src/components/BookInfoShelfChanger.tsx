import { Bookshelfs } from './RouteBookshelfList';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';
import { ChangeEvent } from 'react';

type Props = {
  book: Book;
  onChangeShelf?: (book: Book) => void;
  onAddBook?: (book: Book) => void;
};
const BookInfoShelfChanger = ({ book, onChangeShelf, onAddBook }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    book.shelf = e.target.value;
    onChangeShelf ? onChangeShelf(book) : onAddBook && onAddBook(book);
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf ? book.shelf : 'none'} onChange={handleChange}>
        <option value="label" disabled>
          {book.shelf && book.shelf !== 'none' ? 'Move to...' : 'Add to...'}
        </option>
        {Bookshelfs.map((bs) => (
          <option key={bs.key} value={bs.key}>
            {bs.title}
          </option>
        ))}
        <option value="none">None</option>
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
