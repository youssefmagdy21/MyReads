import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
const Search = () => {
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
        setSearchResults(res);
      });
    }
  }, [searchQuery]);

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
            searchResults.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} />
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
