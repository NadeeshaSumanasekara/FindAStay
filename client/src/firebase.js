// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-hotel-107d5.firebaseapp.com",
  projectId: "mern-hotel-107d5",
  storageBucket: "mern-hotel-107d5.appspot.com",
  messagingSenderId: "888621240412",
  appId: "1:888621240412:web:33f93912923949ce9d1699",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
