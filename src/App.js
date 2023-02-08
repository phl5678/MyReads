import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import RouteSearchBooks from './components/RouteSearchBooks';
import RouteBookshelfList from './components/RouteBookshelfList';
import RouteBookDetails from './components/RouteBookDetails';
import Header from './components/Header';
import NotFound from './components/RouteNotFound';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const onChangeShelf = (book) => {
    const update = async () => {
      await BooksAPI.update(book, book.shelf);
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    };
    update();
  };

  const onAddBook = (book) => {
    const add = async () => {
      await BooksAPI.update(book, book.shelf);
      setBooks([...books, book]);
    };
    add();
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<RouteBookshelfList books={books} onChangeShelf={onChangeShelf} />}
        />
        <Route
          path="/book/:bookId"
          element={<RouteBookDetails onChangeShelf={onChangeShelf} onAddBook={onAddBook} />}
        />

        <Route
          path="/search"
          element={
            <RouteSearchBooks books={books} onAddBook={onAddBook} onChangeShelf={onChangeShelf} />
          }
        />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
