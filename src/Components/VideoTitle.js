import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 pt-12 ml-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-400 text-white text-xl px-8 p-3 rounded-lg bg-opacity-50">
          ▶ Play
        </button>
        <button className="bg-gray-400 text-white text-xl px-8 ml-3 p-3 rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
