import PropTypes from 'prop-types';

const BookInfoTitle = ({ book }) => {
  return (
    <div className="book-title">
      {book.title}
      {book.subtitle ? ` - ${book.subtitle}` : ''}
    </div>
  );
};
BookInfoTitle.propTypes = { book: PropTypes.object };

export default BookInfoTitle;
