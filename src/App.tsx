import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import RouteSearchBooks from './components/RouteSearchBooks';
import RouteBookshelfList from './components/RouteBookshelfList';
import RouteBookDetails from './components/RouteBookDetails';
import Header from './components/Header';
import NotFound from './components/RouteNotFound';
import { Book } from './models/Book';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const onChangeShelf = (book: Book): void => {
    const update = async () => {
      await BooksAPI.update(book, book.shelf);
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    };
    update();
  };

  const onAddBook = (book: Book): void => {
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
        <Route path="/" element={<RouteBookshelfList books={books} onChangeShelf={onChangeShelf} />} />
        <Route path="/book/:bookId" element={<RouteBookDetails onChangeShelf={onChangeShelf} onAddBook={onAddBook} />} />

        <Route path="/search" element={<RouteSearchBooks books={books} onAddBook={onAddBook} onChangeShelf={onChangeShelf} />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
