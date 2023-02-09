import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { Book } from '../models/Book';

type Props = {
  books: Book[];
  setSearchBooks: Dispatch<SetStateAction<Book[]>>;
};

const SearchBooksBar = ({ books, setSearchBooks }: Props) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const searchKeywords = (keywords: string): void => {
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

  const updateSearchResult = (res: Book[]): Book[] => {
    return res.map((r) => {
      const match = books.filter((b) => b.id === r.id);
      return match.length > 0 ? match[0] : r;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <DebounceInput type="text" placeholder="Search by title, author, or ISBN." debounceTimeout={500} onChange={handleChange} />
      </div>
    </div>
  );
};
SearchBooksBar.propTypes = {
  books: PropTypes.array,
  setSearchBooks: PropTypes.func
};
export default SearchBooksBar;
