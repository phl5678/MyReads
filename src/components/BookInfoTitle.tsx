import PropTypes from 'prop-types';
import { Book } from '../models/Book';

const BookInfoTitle = ({ book }: { book: Book }) => {
  return (
    <div className="book-title">
      {book.title}
      {book.subtitle ? ` - ${book.subtitle}` : ''}
    </div>
  );
};
BookInfoTitle.propTypes = { book: PropTypes.object };

export default BookInfoTitle;
