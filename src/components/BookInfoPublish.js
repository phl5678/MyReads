import PropTypes from 'prop-types';

const BookInfoPublish = ({ book }) => {
  return (
    <div className="book-publish">
      <span>Published </span>
      {book.publisher ? (
        <span>
          <span>By </span>
          <strong>{book.publisher}</strong>
        </span>
      ) : (
        ''
      )}
      {book.publishedDate ? (
        <span>
          <span>in </span>
          <strong>{book.publishedDate}</strong>
        </span>
      ) : (
        ''
      )}
    </div>
  );
};
BookInfoPublish.propTypes = { book: PropTypes.object };

export default BookInfoPublish;
