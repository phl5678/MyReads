import Book from "./Book";

const Bookshelf = ({title, books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    books?.map( (b) => (<Book key={b.id} book={b} onChangeShelf={onChangeShelf} />) )
                }
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;