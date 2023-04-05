import React from "react";
import { Link } from "react-router-dom";

const Book = ({ data }) => {
  return (
    <div className="overflow-hidden relative duration-300 transition-all transform hover:translate-y-2">
      <img
        src={data.image}
        alt={data.title}
        className="object-cover w-full h-56 md:h-64 xl:h-80"
      />
      <Link
        className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 duration-300 transition-opacity ease-in top-0 bottom-0 text-gray-300 absolute px-6 py-4 rounded-lg flex flex-col"
        to={`book-details/${data.isbn13}`}
      >
        <h1 className="text-xl font-bold">{data.title}</h1>
        <br />
        <h1 className="text-xl font-bold">{data.subtitle}</h1>
        <h4 className="text-2xl mt-auto  font-bold text-red-600">
          price: {data.price}
        </h4>
      </Link>
    </div>
  );
};

export default Book;
