import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const Bookshelfs = [{
  key: "currentlyReading",
  title: "Currently Reading"
},
{
  key: "wantToRead",
  title: "Want to Read"
},
{
  key: "read",
  title: "Read"
}];

const BookshelfList = ({books, onChangeShelf}) => {

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              Bookshelfs.map((bs) => <Bookshelf key={bs.key} title={bs.title} books={books.filter((b)=>b.shelf===bs.key)} onChangeShelf={onChangeShelf} />)
            }         
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export { BookshelfList as default, Bookshelfs };