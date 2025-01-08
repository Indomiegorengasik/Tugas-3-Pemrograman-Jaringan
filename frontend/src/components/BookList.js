import React, { useState, useEffect } from "react";
import api from "../api";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
