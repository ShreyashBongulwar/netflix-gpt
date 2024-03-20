import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black">

    
    <div className="pt-[15%] pt-12 ml-12   ">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl px-8 p-3 rounded-lg hover:bg-opacity-80">
          🏍 Play
        </button>
        <button className="bg-gray-400 text-white text-xl px-8 ml-3 p-3 rounded-lg bg-opacity-50 hover:bg-opacity-80">
          ❕  More Info
        </button>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
