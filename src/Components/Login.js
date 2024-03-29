import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { bg_img_url } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const [issignInForm, setIsSignInForm] = useState(true);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const [isValidForm, setIsValidForm] = useState(false);
  const [isLoggedIn, setIsLoggdIn] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!issignInForm);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setUserPassword(event.target.value);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (value === "") {
      setPasswordError("please enter PASSWORD");
      setIsValidForm(false);
    } else if (!passwordRegex.test(value)) {
      setPasswordError("enter a valid PASSWORD");
      setIsValidForm(false);
    } else if (passwordRegex.test(value)) {
      setPasswordError("");
      setIsValidForm(true);
    } else if (passwordError === "") {
      setIsValidForm(true);
      setPasswordError("");
    } else {
      setIsValidForm(true);
      setPasswordError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setUserEmail(event.target.value);
    const emailRegex = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;
    if (value === "") {
      setEmailError("please enter email");
      setIsValidForm(false);
    } else if (!emailRegex.test(value)) {
      setEmailError("enter a valid EMAIL");
      setIsValidForm(false);
    } else if (emailRegex.test(value)) {
      setEmailError("");
      setIsValidForm(true);
    } else if (emailError === "") {
      setIsValidForm(true);
      setEmailError("");
    } else {
      setIsValidForm(true);
      setEmailError("");
    }
  };

  useEffect(() => {
    if (
      userPassword != "" &&
      userEmail != "" &&
      emailError === "" &&
      passwordError === ""
    ) {
      setIsLoggdIn(true);
    }
  }, [userPassword, userEmail, emailError, passwordError]);

  const handleSubmitClick = () => {
    if (isLoggedIn) {
      if (issignInForm) {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);

            updateProfile(user, {
              displayName: "Shreyash Bongulwar",
              photoURL:
                "https://media.licdn.com/dms/image/D4D35AQHEUpUg60bBKg/profile-framedphoto-shrink_400_400/0/1690708887581?e=1711263600&v=beta&t=mlhUmfLdcUg3ZYOSD6gBkhVDQdHu8V0FpEiPa1m2Znw",
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("the user is:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-[100%]"
          src={bg_img_url}
          alt="logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg"
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
          {<p className="text-red-600">{emailError}</p>}
          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 my-3 w-full bg-gray-600 "
            onChange={handlePasswordChange}
          />
          {<p className="text-red-600">{passwordError}</p>}
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
    </div>
  );
};

export default Login;
