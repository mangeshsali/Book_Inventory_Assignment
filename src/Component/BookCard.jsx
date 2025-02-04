import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const BookCard = ({ data, DeletHandler, EditClickHandler }) => {
  const { title, author, summary, id } = data;
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col justify-between">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 font-medium">by {author}</p>
      <p className="text-gray-700 mt-2">
        {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
      </p>
      <div className="flex space-x-3 mt-4">
        <button
          className="rounded-lg px-4 py-2 border border-gray-800  bg-white cursor-pointer flex justify-center items-center gap-3 text-md"
          onClick={(e) => EditClickHandler(e, data)}
        >
          <FaEdit className="text-gray-900" />
          Edit
        </button>
        <button
          className="rounded-lg px-4 py-2 text-white bg-gray-800  hover:bg-gray-900 cursor-pointer flex justify-center items-center gap-3 text-md"
          onClick={(e) => DeletHandler(e, id)}
        >
          <MdDelete className="text-white text-lg" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
