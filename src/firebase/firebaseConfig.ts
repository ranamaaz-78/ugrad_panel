// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh0wcEdqbAxh4sYubiLVCUEh_2ldLm-mU",
  authDomain: "ugrad-d4eba.firebaseapp.com",
  projectId: "ugrad-d4eba",
  storageBucket: "ugrad-d4eba.firebasestorage.app",
  messagingSenderId: "218995750475",
  appId: "1:218995750475:web:98cab438c92dad79af3fce",
  measurementId: "G-6WFP10GKB8",
  databaseURL: "https://ugrad-d4eba-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
