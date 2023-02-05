import { Bookshelfs } from "./BookshelfList";

const Book = ({book, onChangeShelf, onAddBook}) => {

  const handleChange = (e) => {
    book.shelf = e.target.value;
    onChangeShelf? onChangeShelf(book):onAddBook(book);
  }
  return (
    <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url("${book.imageLinks?.thumbnail}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf? book.shelf : "none"} onChange={handleChange}>
            <option value="none" disabled>
              {book.shelf? 'Move to...': 'Add to...'}
            </option>
            {
              Bookshelfs.map((bs) => <option key={bs.key} value={bs.key}>{bs.title}</option>)
            }
            {book.shelf? <option value="none">None</option> : ''}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.map((author, index)=> index===0? author: `, ${author}`)}</div>
    </div>
    </li>
  )
}

export default Book;