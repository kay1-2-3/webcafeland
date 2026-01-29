// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrNMV3ZSSX_ozcl7MaVtLoe7mPMPsK44",
  authDomain: "webcafelanding-a9b98.firebaseapp.com",
  projectId: "webcafelanding-a9b98",
  storageBucket: "webcafelanding-a9b98.firebasestorage.app",
  messagingSenderId: "555662021339",
  appId: "1:555662021339:web:bd1e810c46b70f0f26b2fe",
  measurementId: "G-RED7Z95G1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);