import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="confused ! let me help you"
        ></input>
        <button className="col-span-3 m-4 bg-red-600 text-white px-8 ml-3 p-2 rounded-lg hover:bg-opacity-80">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
