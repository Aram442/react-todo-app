// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm7c5OmSAuCfoEZHIfkRD5tIifaGpVr2k",
  authDomain: "react-todo-app-1a193.firebaseapp.com",
  projectId: "react-todo-app-1a193",
  storageBucket: "react-todo-app-1a193.appspot.com",
  messagingSenderId: "51229562137",
  appId: "1:51229562137:web:be2879e027fcb6e9ebe188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
