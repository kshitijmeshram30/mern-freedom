// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-freedom-14789.firebaseapp.com",
  projectId: "mern-freedom-14789",
  storageBucket: "mern-freedom-14789.appspot.com",
  messagingSenderId: "834419962210",
  appId: "1:834419962210:web:9e4d00d36e4a1e89517c3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);