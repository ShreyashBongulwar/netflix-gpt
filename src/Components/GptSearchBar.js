import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openAi"
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  //const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async(e) => {
    debugger
    e.preventDefault();
    //make an api call to egt results
    const gptQuery = "Act as a movie recomendation system and suggest exact 5 movie names only for the query :"+searchText.current.value+" .  give me comma seperated movies name ";
    const GptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
    });
    console.log("movie result is:",GptResults.choices)
    const gptMovies =GptResults.choices?.[0]?.message?.content.split(",")
  };
  return (
    <div className="pt-[30%] md:pt-[5%] flex justify-center">
      <form
        className="w-full m-4 md:m-0 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang.en.gptSearchPlaceHolder}
        ></input>
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 bg-red-600 text-white px-8 ml-3 p-2 rounded-lg hover:bg-opacity-80"
        >
          {lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
