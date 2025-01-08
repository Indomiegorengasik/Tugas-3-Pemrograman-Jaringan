import React, { useState } from "react";
import api from "../api";

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : "");
  const [author, setAuthor] = useState(book ? book.author : "");
  const [price, setPrice] = useState(book ? book.price : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, price };
    if (book) {
      api.put(`/books/${book.id}`, newBook)
        .then(() => onSubmit())
        .catch((error) => console.error("Error updating book:", error));
    } else {
      api.post("/books", newBook)
        .then(() => onSubmit())
        .catch((error) => console.error("Error creating book:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
