import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [issignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!issignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg">
        <h1 className="font-bold text-3xl py-3">
          {issignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!issignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-3 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-3 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-3 bg-red-600 w-full rounded-lg">
          {issignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {issignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
