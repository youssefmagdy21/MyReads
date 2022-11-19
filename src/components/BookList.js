import BookShelf from "./BookShelf";

const BookList = ({ bookList, selectNewShelf }) => {
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
        <BookShelf
          title="Currently Reading"
          bookList={currentlyReading}
          selectNewShelf={selectNewShelf}
        />
        <BookShelf
          title="Want To Read"
          bookList={wantToRead}
          selectNewShelf={selectNewShelf}
        />
        <BookShelf
          title="Read"
          bookList={read}
          selectNewShelf={selectNewShelf}
        />
      </div>
    </div>
  );
};

export default BookList;
