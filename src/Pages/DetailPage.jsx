import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BOOKAPI } from "../Config/API";
import axios from "axios";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Loader from "../Component/Loader";

const DetailPage = () => {
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // Book DetailsAPI
  const GETBOOKDETAIL = async () => {
    try {
      const res = await axios.get(`${BOOKAPI}/${id}`);
      setBookDetails(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GETBOOKDETAIL();
  }, [id]);

  const { pages, publishedDate, genre, summary, author, title, language } =
    bookDetails || {};

  return loading ? (
    <Loader />
  ) : (
    <div className="lg:w-[40%]">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 hover:bg-gray-900  px-4 py-2 text-white rounded-lg flex justify-center items-center gap-3 cursor-pointer"
        >
          <MdOutlineKeyboardBackspace className="text-lg" />
          Back
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6  border border-gray-200 w-full">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-lg font-medium">by {author}</p>

        <div className="mt-4">
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Genre:</span> {genre}
            </p>
            <p>
              <span className="font-semibold">Laguage:</span> {language}
            </p>
            <p>
              <span className="font-semibold">Published:</span> {publishedDate}
            </p>
            <p>
              <span className="font-semibold">Pages:</span> {pages}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-gray-700">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
