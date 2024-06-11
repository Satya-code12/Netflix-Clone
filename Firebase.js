// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZ6FVU-23huTp7-kj3wAn_TExlFfvl84",
  authDomain: "netflix-clone-637.firebaseapp.com",
  projectId: "netflix-clone-637",
  storageBucket: "netflix-clone-637.appspot.com",
  messagingSenderId: "828039403245",
  appId: "1:828039403245:web:049d04efb94f6d4e9ddee4"
  // measurementId: "G-R2HP6SND2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;