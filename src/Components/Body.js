import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, useNavigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
const Body = () => {

    const dispatch = useDispatch()
    const appRouter=createBrowserRouter(
        [
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browse/>
            }
        ]
    )

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            
            //sign in case
            if(user){
                const {uid,email,displayName,photoURL}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            }
            //sign out case 
            else{
                dispatch(removeUser());
            }
        });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
