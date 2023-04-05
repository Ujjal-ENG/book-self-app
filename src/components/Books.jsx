import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 justify-items-center">
        {books.map((book, idx) => (
          <Book key={idx} data={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
