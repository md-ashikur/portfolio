// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR5iq3brseIASWy4Wk2QNpBkRnVluILO0",
  authDomain: "portfolio-4fb78.firebaseapp.com",
  projectId: "portfolio-4fb78",
  storageBucket: "portfolio-4fb78.appspot.com",
  messagingSenderId: "198515602326",
  appId: "1:198515602326:web:0845cde04cf1d178e623b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;