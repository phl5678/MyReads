import PropTypes from 'prop-types';
import BookInfoCover from './BookInfoCover';
import BookInfoShelfChanger from './BookInfoShelfChanger';
import BookInfoTitle from './BookInfoTitle';
import BookInfoAuthors from './BookInfoAuthors';
import BookInfoPublish from './BookInfoPublish';
import BookInfoDescription from './BookInfoDescription';
import { Book } from '../models/Book';

type Props = {
  book: Book;
  onChangeShelf?: (book: Book) => void;
  onAddBook?: (book: Book) => void;
};

const BookDetails = ({ book, onChangeShelf, onAddBook }: Props) => {
  return (
    <div className="book-details">
      <div className="book-top">
        <BookInfoCover book={book} />
        <BookInfoShelfChanger book={book} onChangeShelf={onChangeShelf} onAddBook={onAddBook} />
      </div>
      <div className="book-right">
        <BookInfoTitle book={book} />
        <BookInfoAuthors book={book} isliteral={true} />
        <BookInfoPublish book={book} />
        <BookInfoDescription book={book} />
      </div>
    </div>
  );
};
BookDetails.propTypes = {
  book: PropTypes.object,
  onChangeShelf: PropTypes.func,
  onAddBook: PropTypes.func
};
export default BookDetails;
