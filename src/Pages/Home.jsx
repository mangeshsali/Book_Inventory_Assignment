import React, { useEffect, useState } from "react";
import { BOOKAPI } from "../Config/API";
import BookCard from "../Component/BookCard";
import { Link } from "react-router";
import CreateBook from "../Component/CreateBook";
import axios from "axios";
import toast from "react-hot-toast";
import { MdCreate } from "react-icons/md";
import Loader from "../Component/Loader";

const Home = () => {
  const [AllBookData, setAllBookData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [createPopUp, setCreatePopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);

  const [formData, setFormData] = useState({});

  // GET  ALL DATA API
  const GETALLDATA = async () => {
    try {
      const res = await axios.get(BOOKAPI);
      setAllBookData(res?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  // DELETE API
  const DELETEBOOK = async (id) => {
    try {
      const Delete = await axios.delete(`${BOOKAPI}/${id}`);
      const NewUpdated = AllBookData.filter((item) => item.id !== id);
      setAllBookData(NewUpdated);
      toast.success("Deleted Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error in Delete Book");
    }
  };

  const DeletHandler = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    DELETEBOOK(id);
  };

  const EditClickHandler = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData(data);
    setEditPopUp((prev) => !prev);
  };

  const CreateClickHandler = () => {
    setFormData({});
    setCreatePopUp((prev) => !prev);
  };
  useEffect(() => {
    if (AllBookData) {
      GETALLDATA();
    }
  }, []);

  console.log("FO", formData);
  return loading ? (
    <Loader />
  ) : (
    <div className=" w-full flex justify-center flex-col items-center">
      <div className="  lg:w-[70%] flex flex-col gap-4 border border-black rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold text-gray-800">ALL Books</h1>
        <div className="flex justify-end mr-2">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 cursor-pointer flex  justify-center items-center gap-3"
            onClick={CreateClickHandler}
          >
            <MdCreate className="text-lg" />
            Create
          </button>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {AllBookData.length == 0 ? (
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                No Book Available
              </h1>
            </div>
          ) : (
            AllBookData.map((item, index) => {
              return (
                <Link to={`/books/${item.id}`} key={index}>
                  <BookCard
                    data={item}
                    DeletHandler={DeletHandler}
                    EditClickHandler={EditClickHandler}
                  />
                </Link>
              );
            })
          )}
        </div>

        {createPopUp || editPopUp ? (
          <CreateBook
            formData={formData}
            create={createPopUp}
            setCreatePopUp={setCreatePopUp}
            setEditPopUp={setEditPopUp}
            setFormData={setFormData}
            GETALLDATA={GETALLDATA}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
