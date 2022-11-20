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
      console.log(res);
      setBookList(res);
    });
  }, []);

  const selectNewShelf = (e, book) => {
    console.log("i changed ", book.title, " to ", e.target.value);
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
  return (
    <div className="app">
      <Routes>
        {/* start default page */}
        <Route
          path="/"
          element={
            <BookList bookList={bookList} selectNewShelf={selectNewShelf} />
          }
        ></Route>
        {/* end default page */}
        {/* start search page */}
        <Route path="search" element={<Search />}></Route>
        {/* end search page */}
      </Routes>
    </div>
  );
}

export default App;
