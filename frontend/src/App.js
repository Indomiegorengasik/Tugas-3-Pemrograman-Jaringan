import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditBook = (book) => {
    setSelectedBook(book);
  };

  const handleSubmit = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h1>Book Management App</h1>
      {selectedBook ? (
        <BookForm book={selectedBook} onSubmit={handleSubmit} />
      ) : (
        <BookForm onSubmit={handleSubmit} />
      )}
      <BookList />
    </div>
  );
};

export default App;
