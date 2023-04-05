import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const { books } = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
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
