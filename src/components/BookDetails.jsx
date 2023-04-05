import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookData = useLoaderData();
  console.log(bookData);
  return <div>BookDetails</div>;
};

export default BookDetails;
