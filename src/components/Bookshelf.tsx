import BookItem from './BookItem';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';

type Props = {
  title: string;
  books: Book[];
  onChangeShelf: (book: Book) => void;
};
const Bookshelf = ({ title, books, onChangeShelf }: Props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((b) => (
            <li key={b.id}>
              <BookItem book={b} onChangeShelf={onChangeShelf} />
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
