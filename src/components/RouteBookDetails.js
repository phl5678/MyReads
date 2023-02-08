import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookDetails from './BookDetails';
import PropTypes from 'prop-types';

const RouteBookDetails = ({ onChangeShelf, onAddBook }) => {
  const { bookId } = useParams();
  const location = useLocation();
  const { bookFromParent } = location.state ? location.state : { bookFromParent: null };
  const [book, setBook] = useState(bookFromParent);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await BooksAPI.get(bookId);
        setBook(res);
      } catch (err) {
        navigate('/404');
      }
    };
    if (book === null) getBook();
  }, [bookId, book]);

  return book ? (
    <div className="container">
      <BookDetails book={book} onChangeShelf={onChangeShelf} onAddBook={onAddBook} />
    </div>
  ) : (
    ''
  );
};

RouteBookDetails.propTypes = {
  onChangeShelf: PropTypes.func,
  onAddBook: PropTypes.func,
  bookFromModal: PropTypes.object
};
export default RouteBookDetails;
