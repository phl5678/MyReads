import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookDetails from './BookDetails';
import PropTypes from 'prop-types';
import { Book } from '../models/Book';

type Props = {
  onChangeShelf: (book: Book) => void;
  onAddBook: (book: Book) => void;
};
const RouteBookDetails = ({ onChangeShelf, onAddBook }: Props) => {
  const { bookId } = useParams<{ bookId: string | undefined }>();
  const location = useLocation();
  const { bookFromParent } = location.state || { bookFromParent: null };
  const [book, setBook] = useState<Book>(bookFromParent);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        if (bookId === undefined) {
          throw new Error('Missing bookId in the URL.');
        }
        const res = await BooksAPI.get(bookId);
        setBook(res);
      } catch (err) {
        navigate('/404');
      }
    };
    if (book === null) getBook();
  }, [bookId, book]);

  return <div className="container">{book ? <BookDetails book={book} onChangeShelf={onChangeShelf} onAddBook={onAddBook} /> : ''}</div>;
};

RouteBookDetails.propTypes = {
  onChangeShelf: PropTypes.func,
  onAddBook: PropTypes.func,
  bookFromModal: PropTypes.object
};
export default RouteBookDetails;
