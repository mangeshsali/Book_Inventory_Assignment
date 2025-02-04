import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { BOOKAPI } from "../Config/API";

const CreateBook = ({
  formData,
  setEditPopUp,
  create,
  setCreatePopUp,
  setFormData,
  GETALLDATA,
}) => {
  // Update API
  const PUTFORM = async (id) => {
    try {
      const res = await axios.put(`${BOOKAPI}/${id}`, formData);
      GETALLDATA();
      setFormData({});
      toast.success("Edit Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error in Update Book");
    }
  };

  // Create API
  const POSTFORM = async () => {
    try {
      const res = await axios.post(BOOKAPI, formData);
      GETALLDATA();
      setFormData({});
      toast.success("Created Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error in Create Book");
    }
  };

  const EditHandler = (e, id) => {
    e.preventDefault();
    console.log("edit Final", formData);
    PUTFORM(formData.id);
    setEditPopUp(false);
  };

  const CreateHandler = (e) => {
    e.preventDefault();
    setFormData({});
    POSTFORM();
    setCreatePopUp(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create ? CreateHandler(e) : EditHandler(e);
  };

  const popUPHandler = () => {
    create ? setCreatePopUp(false) : setEditPopUp(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="max-w-2xl w-full bg-white p-6 shadow-lg rounded-lg relative">
        <button
          className="absolute right-4 top-4 text-red-500 text-3xl font-bold cursor-pointer"
          onClick={popUPHandler}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          {create ? "Add a New Book" : "Edit Book"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Language</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Published Year</label>
            <input
              type="date"
              name="publishedDate"
              value={formData.publishedDate}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Publisher</label>
            <input
              type="text"
              name="publisher"
              value={formData.publisher}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Pages</label>
            <input
              type="number"
              name="pages"
              value={formData.pages}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            />
          </div>

          <div className="col-span-2">
            <label className="text-gray-600 font-medium">Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              required
              className="w-full p-2 border rounded"
              onChange={onChangeHandler}
            ></textarea>
          </div>

          <div className="">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-2 rounded"
            >
              {create ? "Add Book" : "Update Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
