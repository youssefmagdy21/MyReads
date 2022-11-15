const Book = ({ title, thumbnail, authors }) => {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </div>
  );
};

export default Book;
// {/* <div className="book-shelf-changer">
//             <select>
//               <option value="none" disabled>
//                 Move to...
//               </option>
//               <option value="currentlyReading">Currently Reading</option>
//               <option value="wantToRead">Want to Read</option>
//               <option value="read">Read</option>
//               <option value="none">None</option>
//             </select>
//           </div> */}
