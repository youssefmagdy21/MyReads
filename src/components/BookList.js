import BookShelf from "./BookShelf";

const BookList = ({ bookList }) => {
  const currentlyReading = [],
    wantToRead = [],
    read = [];
  bookList.forEach((ele) => {
    if (ele.shelf === "currentlyReading") {
      currentlyReading.push(ele);
    } else if (ele.shelf === "wantToRead") {
      wantToRead.push(ele);
    } else if (ele.shelf === "read") {
      read.push(ele);
    }
  });
  return (
    <div className="list-books-content">
      <div>
        <BookShelf title="Currently Reading" bookList={currentlyReading} />
        <BookShelf title="Want To Read" bookList={wantToRead} />
        <BookShelf title="Read" bookList={read} />
      </div>
    </div>
  );
};

export default BookList;
