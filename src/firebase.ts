// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaACx18xLYftn9eG8-mlqroqVeF_NWHdQ",
  authDomain: "vite-project-40d88.firebaseapp.com",
  projectId: "vite-project-40d88",
  storageBucket: "vite-project-40d88.appspot.com",
  messagingSenderId: "846978396989",
  appId: "1:846978396989:web:6350b9f3c00650c5d70b54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
