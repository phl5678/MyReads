import PropTypes from 'prop-types';
import { Book } from '../models/Book';

const BookInfoDescription = ({ book }: { book: Book }) => {
  return (
    <div className="book-description">
      <div>{book.description ? book.description : 'No description available.'}</div>
    </div>
  );
};
BookInfoDescription.propTypes = { book: PropTypes.object };

export default BookInfoDescription;
