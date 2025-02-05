import React from "react";

const Loader = () => {
  return (
    <div className=" h-screen  flex justify-center items-center">
      <div className="flex justify-center flex-col  items-center">
        <p className="loader"></p>
        <p className=" text-xl text-gray-800 font-medium">Loading</p>
      </div>
    </div>
  );
};

export default Loader;
