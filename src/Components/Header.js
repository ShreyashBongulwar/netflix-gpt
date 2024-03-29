import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import {
  Netflixlogo,
  UserAvatar,
  supported_anguages,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //sign in case
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      }
      //sign out case
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 mx-auto md:mx-0" src={Netflixlogo} alt="logo" />
      {user && (
        <div className="mt-3 flex p-2 gap-4 justify-between">
          { showGptSearch && <select
            className="bg-gray-400 text-white px-8 ml-3 p-2 rounded-lg bg-opacity-50 hover:bg-opacity-80"
            onChange={handleLanguageChange}
          >
            {supported_anguages.map((lang) => (
              <option
                className="bg-grey-900 text-black"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearchClick}
            className="bg-gray-400 text-white px-8 ml-3 p-2 rounded-lg bg-opacity-50 hover:bg-opacity-80"
          >
            {showGptSearch?"Home Page":"GPT Search"}
          </button>
          <img
            className="md:w-10 hidden md:block" 
            //src={user.photoURL}
            src={UserAvatar}
            alt="logo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
