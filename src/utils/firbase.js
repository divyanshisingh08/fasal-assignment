// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFMjxya0oorhgFZTYicjjqtYY-kaY0Ivs",
  authDomain: "fasal-assignment-2aa13.firebaseapp.com",
  projectId: "fasal-assignment-2aa13",
  storageBucket: "fasal-assignment-2aa13.appspot.com",
  messagingSenderId: "749812743517",
  appId: "1:749812743517:web:e588f334d800e19d8a3cb4",
  measurementId: "G-9Q5V2SSK4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 