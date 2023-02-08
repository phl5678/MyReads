import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookInfoCover from './BookInfoCover';
import BookInfoShelfChanger from './BookInfoShelfChanger';
import BookInfoTitle from './BookInfoTitle';
import BookInfoAuthors from './BookInfoAuthors';
import BookDetails from './BookDetails';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const BookItem = ({ book, onChangeShelf, onAddBook, fromSearch }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="book">
      <div className="book-top">
        {fromSearch ? (
          <Link to="#" onClick={openModal}>
            <BookInfoCover book={book} />
          </Link>
        ) : (
          <Link to={`/book/${book.id}`} state={{ bookFromParent: book }}>
            <BookInfoCover book={book} />
          </Link>
        )}
        <BookInfoShelfChanger book={book} onChangeShelf={onChangeShelf} onAddBook={onAddBook} />
      </div>

      <BookInfoTitle book={book} />
      <BookInfoAuthors book={book} />

      {fromSearch ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="book-details-modal"
          contentLabel="Book Details">
          <Link to="#" onClick={closeModal} className="close-modal">
            Close
          </Link>
          <BookDetails book={book} onChangeShelf={onChangeShelf} onAddBook={onAddBook} />
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object,
  onChangeShelf: PropTypes.func,
  onAddBook: PropTypes.func,
  fromSearch: PropTypes.bool
};
export default BookItem;
