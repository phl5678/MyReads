import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBooksBar = ({ books, setSearchBooks, setSearched }) => {
  const [query, setQuery] = useState('');

  const updateSearchResult = (res) => {
    return res.map((r) => {
      const match = books.filter((b) => b.id === r.id);
      return match.length > 0 ? match[0] : r;
    });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const q = query.trim().toLowerCase();

      const search = async () => {
        const res = await BooksAPI.search(q);
        if (res.length > 0) {
          const updated = updateSearchResult(res);
          setSearchBooks(updated);
        } else {
          setSearchBooks([]);
        }
      };

      q.length === 0 ? setSearchBooks([]) : search();
      setSearched(true);
    }
  };

  return (
    <div>
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="search-subtitle">Type and hit enter to begin search.</div>
    </div>
  );
};
SearchBooksBar.propTypes = {
  books: PropTypes.array,
  setSearchBooks: PropTypes.func,
  setSearched: PropTypes.func
};
export default SearchBooksBar;
