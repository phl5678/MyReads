import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const SearchBooks = ({books, onAddBook}) => {

  const [query, setQuery] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);
  const [searched, setSearched] = useState(false);

  const updateSearchResult = (res) => {
    return res.map((r) => {
      const match = books.filter((b)=>b.id===r.id);
      return match.length > 0 ? match[0] : r;
    });
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {       
      const q = query.trim().toLowerCase();
      
      const search = async () => {
        const res = await BooksAPI.search(q);
        if (res.length > 0) {
          const updated = updateSearchResult(res);
          setSearchBooks(updated);
        }
        else { 
          setSearchBooks([]); 
        }
      }

      q.length === 0 ? setSearchBooks([]) : search();
      setSearched(true);
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="search-books-results">
        <span>Type and hit it enter to begin search.</span>        
        <ol className="books-grid">
        {
          searchBooks.length > 0 ? 
          searchBooks.map((b) => <li key={b.id}> <Book book={b} onAddBook={onAddBook}/></li>)
          : searched? <span>No result found.</span> : ''
        }
        </ol>
          
        
      </div>
    </div>
  )
}

export default SearchBooks;