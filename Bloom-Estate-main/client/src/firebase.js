// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6ed68.firebaseapp.com",
  projectId: "real-estate-6ed68",
  storageBucket: "real-estate-6ed68.appspot.com",
  messagingSenderId: "899431161268",
  appId: "1:899431161268:web:a87889b021fac6dedfa6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;