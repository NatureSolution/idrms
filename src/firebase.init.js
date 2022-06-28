// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRwBiANan8ImkKnzakm0w4gBKHR2HAIZM",
  authDomain: "idrms-1439e.firebaseapp.com",
  projectId: "idrms-1439e",
  storageBucket: "idrms-1439e.appspot.com",
  messagingSenderId: "779695584760",
  appId: "1:779695584760:web:b1dd16fa335a7d55a2920d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
