// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBmwUdT6nD94s1B-tKvWJXHsKPpdGlxoc",
  authDomain: "netflixgpt-b4bc0.firebaseapp.com",
  projectId: "netflixgpt-b4bc0",
  storageBucket: "netflixgpt-b4bc0.appspot.com",
  messagingSenderId: "693288384167",
  appId: "1:693288384167:web:f069c95e215d9d31eb0d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth();