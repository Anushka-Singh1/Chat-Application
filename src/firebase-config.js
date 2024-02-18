// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWPfqD9x3bkvuS2f1YRvoQM7MIC-L_Y0",
  authDomain: "chatapp-b42e6.firebaseapp.com",
  projectId: "chatapp-b42e6",
  storageBucket: "chatapp-b42e6.appspot.com",
  messagingSenderId: "388279274156",
  appId: "1:388279274156:web:534ebe25b5e5f4b09d2d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
