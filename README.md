# MyReads
 
MyReads is a bookshelf app using React that allows you to select and categorize books you have read, are currently reading, or want to read. 

## Instruction
1. run `npm install` to prepare the environment
2. run `npm start` to start the application
3. Go to [http://localhost:3000/](http://localhost:3000/) and start managing your books.


## Features
1. Bookshelf List
   - View three bookshelves - currently reading, want to read, and read.
   - Change category for each book on the bookshelf by clicking the arrow button.
   - View book detail page by clicking the book cover.
   - Search for new books to add to the shelf by clicking the plus botton on the bottom right.
2. Book Detail
   - View book information (cover, title, subtitle, authors, publisher, published date, description, shelf info)
   - Change the shelf for the book.
3. Search Books
   - Type keywords (case insensitive, multiple keywords seperated by space is allowed) to begin search. 
     - Debounce input is used for delaying the onChange for 500ms.
   - View the query result
   - Add new book to the shelf or change the shelf for existing book by clicking the arrow button
   - View book detail by clicking the book cover. A modal with book details should pop up.
   - In the book detail popup, you are able to add it to the shelf or change the shelf.


## Misc
1. Backend API https://reactnd-books-api.udacity.com Provided by Udacity. The available endpoints are
   - GET /books/:bookId
     - get one book info
   - GET /books
     - get all books in the bookshelf
   - PUT /books/:bookId
     - update the book shelf info for one book
   - POST /search with {"query": <query string>} in body.
     - search keywords and return a list of books.
2. All js codes are passed Prettier/ESLint run.

