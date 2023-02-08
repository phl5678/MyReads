import PropTypes from 'prop-types';

const BookInfoDescription = ({ book }) => {
  return (
    <div className="book-description">
      <div>{book.description ? book.description : 'No description available.'}</div>
    </div>
  );
};
BookInfoDescription.propTypes = { book: PropTypes.object };

export default BookInfoDescription;
