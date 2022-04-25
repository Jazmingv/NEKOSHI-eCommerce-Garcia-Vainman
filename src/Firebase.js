// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHFj8Q_zkNnIM3DNm8-WmFhn68NC48uKo",
  authDomain: "nekoshi-28710.firebaseapp.com",
  projectId: "nekoshi-28710",
  storageBucket: "nekoshi-28710.appspot.com",
  messagingSenderId: "494746707749",
  appId: "1:494746707749:web:81171d18a32b433c6b1ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore Database
const dBase = getFirestore(app);

export default dBase;