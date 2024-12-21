// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "mc-portfolio-3ee8f.firebasestorage.app",
  messagingSenderId: "281746268763",
  appId: "1:281746268763:web:8e08c06eb08c4b826e957e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);