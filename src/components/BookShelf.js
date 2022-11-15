import Book from "./Book";

const BookShelf = ({ title, bookList }) => {
  const books = bookList.map((book) => {
    return (
      <li key={book.id}>
        <Book
          title={book.title}
          thumbnail={book.thumbnail}
          authors={book.authors}
        />
      </li>
    );
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{books}</ol>
      </div>
    </div>
  );
};

export default BookShelf;
