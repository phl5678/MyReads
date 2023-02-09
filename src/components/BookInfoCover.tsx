import PropTypes from 'prop-types';
import { Book } from '../models/Book';

const BookInfoCover = ({ book }: { book: Book }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${book.imageLinks?.thumbnail}")`
      }}
    />
  );
};
BookInfoCover.propTypes = {
  book: PropTypes.object
};
export default BookInfoCover;
