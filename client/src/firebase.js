// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-freedom.firebaseapp.com",
  projectId: "mern-freedom",
  storageBucket: "mern-freedom.appspot.com",
  messagingSenderId: "872532495829",
  appId: "1:872532495829:web:14cd6548a909ddb52c815c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);