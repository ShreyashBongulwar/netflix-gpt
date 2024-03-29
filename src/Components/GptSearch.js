import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { bg_img_url } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 blur-sm">
        <img className="h-screen object-cover md:h-[100%]" src={bg_img_url} alt="logo" />
      </div>
      <div className=" md:pt-[0%]">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
