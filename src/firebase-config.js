// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoDiM3IqQkqLiE0CWuzxjAriOKDm_3wy0",
  authDomain: "chatapplication-c0ec8.firebaseapp.com",
  projectId: "chatapplication-c0ec8",
  storageBucket: "chatapplication-c0ec8.appspot.com",
  messagingSenderId: "922511741836",
  appId: "1:922511741836:web:e486ee63eab0295ac9bca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();