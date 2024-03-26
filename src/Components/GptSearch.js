import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_img_url } from '../utils/constants'
const GptSearch = () => {

  return (
    <div>
      <div className="absolute -z-10 blur-sm">
        <img
          src={bg_img_url}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch