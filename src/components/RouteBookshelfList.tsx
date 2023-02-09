import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';

const Bookshelfs = [
  {
    key: 'currentlyReading',
    title: 'Currently Reading'
  },
  {
    key: 'wantToRead',
    title: 'Want to Read'
  },
  {
    key: 'read',
    title: 'Read'
  }
];

type Props = {
  books: Book[];
  onChangeShelf: (book: Book) => void;
};

const RouteBookshelfList = ({ books, onChangeShelf }: Props) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        {Bookshelfs.map((bs) => (
          <Bookshelf key={bs.key} title={bs.title} books={books.filter((b) => b.shelf === bs.key)} onChangeShelf={onChangeShelf} />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
RouteBookshelfList.propTypes = {
  books: PropTypes.array,
  onChangeShelf: PropTypes.func
};
export { RouteBookshelfList as default, Bookshelfs };
