// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7MiR2mfKiBUAO6TXvqFEImOx5Ms4xJk",
  authDomain: "idrms-20140.firebaseapp.com",
  projectId: "idrms-20140",
  storageBucket: "idrms-20140.appspot.com",
  messagingSenderId: "675316456603",
  appId: "1:675316456603:web:6d3b91f29ee6ed3d2f3a3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export de
