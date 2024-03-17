import React from "react";
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth";

import { auth} from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  
  const handleSignOut = () =>{
      signOut(auth).then(()=>{
        navigate("/")
      })
      .catch((error)=>{
        navigate("/error")
      })
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
user &&
      <div className="mt-3 flex p-2 gap-4" >
        <img
          className="w-10"
          //src={user.photoURL}
          src="https://media.licdn.com/dms/image/C4D03AQECLBTVEFrGwg/profile-displayphoto-shrink_800_800/0/1623923012087?e=1716422400&v=beta&t=vWE4BZkMb-eq8Ex9gaD3kxIvPBBwDgIat-gDjCR7jBw"
          alt="logo"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
}
    </div>
  );
};

export default Header;
