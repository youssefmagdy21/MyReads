import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBookList(res);
    });
  }, []);

  const selectNewShelf = (e, book) => {
    const newShelf = e.target.value;
    // updating the backend
    BooksAPI.update(book, newShelf);
    // updating the frontend
    setBookList((prevBookList) => {
      return prevBookList.map((ele) => {
        if (ele.id === book.id) {
          return { ...ele, shelf: newShelf };
        }
        return ele;
      });
    });
  };
  const addNewBook = (e, book) => {
    const newShelf = e.target.value;
    // updating the backend
    BooksAPI.update(book, newShelf);
    // updating the frontend
    setBookList((prevBookList) => {
      return [...prevBookList, { ...book, shelf: newShelf }];
    });
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <BookList bookList={bookList} selectNewShelf={selectNewShelf} />
          }
        ></Route>
        <Route
          path="search"
          element={
            <Search
              bookList={bookList}
              addNewBook={addNewBook}
              selectNewShelf={selectNewShelf}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
