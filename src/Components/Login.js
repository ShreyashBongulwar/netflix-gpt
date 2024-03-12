import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [issignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [useremail,setUserEmail]=useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const[userPassword,setUserPassword]=useState(null);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!issignInForm);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    // Regular expression for email validation
    const emailRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const isValidEmail = emailRegex.test(value);

    setUserPassword(value);
    setIsValidPassword(isValidEmail);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    // Regular expression for email validation
    const emailRegex = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;
    const isValidEmail = emailRegex.test(value);

    setUserEmail(value);
    setIsValidEmail(isValidEmail);
  };
  const handleSubmitClick = () => {
    debugger;
    // console.log(email.current.email)
    // console.log(password.current.password)
    // const message = checkValidData(email.current.value,password.current.value)
    // setErrorMsg(message);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-3">
          {issignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!issignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-3 w-full bg-gray-600 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-600 "
          onChange={handleEmailChange}
        />
        {!isValidEmail && <p className="text-red-600">Please enter a valid email address.</p>}
        <input
          type="password"
          placeholder="Enter Password"
          className="p-3 my-3 w-full bg-gray-600 "
          onChange={handlePasswordChange}
        />
        {!isValidPassword && <p className="text-red-600">Please enter a valid password.</p>}
        <button
          className="p-3 my-3 bg-red-600 w-full rounded-lg"
          onClick={handleSubmitClick()}
        >
          {issignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {issignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
