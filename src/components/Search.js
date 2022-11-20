import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
const Search = ({ bookList, selectNewShelf, addNewBook }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (searchQuery !== "") {
      BooksAPI.search(searchQuery, 20).then((res) => {
        if (res.error) {
          console.log(res.error, " didn't find anything");
          setSearchResults([]);
          return;
        }
        console.log("current ", searchQuery);
        console.log(res);
        // const showList = getExistingBook(res);
        // console.log(getExistingBook(showList));
        setSearchResults(res);
      });
    }
  }, [searchQuery]);

  // const getExistingBook = (list) => {
  //   return list.map((ele) => {
  //     let tmpBook = {};
  //     for (let i = 0; i < bookList.length; i++) {
  //       if (ele.id === bookList[i].id) {
  //         tmpBook = { ...bookList[i] };
  //         break;
  //       }
  //       tmpBook = { ...ele };
  //     }
  //     return tmpBook;
  //   });
  // };
  // console.log(getExistingBook());
  // const showSearchResults = searchResults.map((book) => {
  //   return (
  //     <li key={book.id}>
  //       <Book book={book} />
  //     </li>
  //   );
  // });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchQuery !== "" ? (
            searchResults.map((ele) => {
              let book = {};
              let isNewBook = true;
              for (let i = 0; i < bookList.length; i++) {
                if (ele.id === bookList[i].id) {
                  book = { ...bookList[i] };
                  isNewBook = false;
                  break;
                }
                book = { ...ele };
              }
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    selectNewShelf={isNewBook ? addNewBook : selectNewShelf}
                  />
                </li>
              );
            })
          ) : (
            <h1>Nothing To Show Yet...</h1>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
