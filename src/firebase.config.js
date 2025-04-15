// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVKlGHU6Z_livyQ9izypu43-uen0R1-B4",
  authDomain: "orebi-pars.firebaseapp.com",
  projectId: "orebi-pars",
  storageBucket: "orebi-pars.firebasestorage.app",
  messagingSenderId: "156641174884",
  appId: "1:156641174884:web:d69f84c28e0240dd970671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;