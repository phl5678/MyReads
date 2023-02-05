import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import BookshelfList from "./components/BookshelfList";

function App() {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [books]);

  const onChangeShelf = (book) => {
    const update = async () => {
      const res = await BooksAPI.update(book, book.shelf);
      setBooks(books.map((b) => b.id===res.id ? res: b));
    }
    update();
  }

  const onAddBook = (book) => {
    const add = async () => {
      const res = await BooksAPI.update(book, book.shelf);
      setBooks([...books, res]);
    }
    add();
    navigate("/");
  }
  return (
    <div className="app">
      <Routes>
        <Route 
          exact
          path="/"
          element={
          <BookshelfList books={books} onChangeShelf={onChangeShelf} />
          }/>
        <Route 
          path="/search"
          element={
          <SearchBooks books={books} onAddBook={onAddBook} />
          }/>
      </Routes>
    </div>
  );
}

export default App;
