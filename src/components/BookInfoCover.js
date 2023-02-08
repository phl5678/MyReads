import PropTypes from 'prop-types';
const BookInfoCover = ({ book }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${book.imageLinks?.thumbnail}")`
      }}></div>
  );
};
BookInfoCover.propTypes = {
  book: PropTypes.object
};
export default BookInfoCover;
