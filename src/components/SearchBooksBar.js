import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const SearchBooksBar = ({ books, setSearchBooks }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchKeywords = (keywords) => {
      const q = keywords.trim().toLowerCase();

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
    };
    searchKeywords(query);
  }, [query]);

  const updateSearchResult = (res) => {
    return res.map((r) => {
      const match = books.filter((b) => b.id === r.id);
      return match.length > 0 ? match[0] : r;
    });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          type="text"
          placeholder="Search by title, author, or ISBN."
          debounceTimeout={500}
          onChange={handleChange}
        />

        {/* <input
          type="text"
          placeholder="Search by title, author, or ISBN."
          onChange={handleChange}
        /> */}
      </div>
    </div>
  );
};
SearchBooksBar.propTypes = {
  books: PropTypes.array,
  setSearchBooks: PropTypes.func
};
export default SearchBooksBar;
