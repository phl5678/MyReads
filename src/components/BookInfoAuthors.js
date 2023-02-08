import PropTypes from 'prop-types';

const BookInfoAuthors = ({ book, isliteral }) => {
  return (
    <div className="book-authors">
      {isliteral ? (
        <span>
          <span>By </span>
          <strong>
            {book.authors?.map((author, index) => (index === 0 ? author : `, ${author}`))}
          </strong>
        </span>
      ) : (
        <span>{book.authors?.map((author, index) => (index === 0 ? author : `, ${author}`))}</span>
      )}
    </div>
  );
};
BookInfoAuthors.propTypes = { book: PropTypes.object, isliteral: PropTypes.bool };

export default BookInfoAuthors;
