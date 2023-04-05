import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./Pagination";

const Books = () => {
  const { books } = useLoaderData();
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = books.slice(firstPostIndex, lastPostIndex);
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 justify-items-center">
        {currentPosts.map((book, idx) => (
          <Book key={idx} data={book} />
        ))}
      </div>
      <Pagination
        totalPosts={books.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Books;
