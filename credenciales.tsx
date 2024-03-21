/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjgyqEerZYx4bQqfu1BF1mcbqm4A3mcPk",
  authDomain: "punto-venta-2169c.firebaseapp.com",
  projectId: "punto-venta-2169c",
  storageBucket: "punto-venta-2169c.appspot.com",
  messagingSenderId: "350925349159",
  appId: "1:350925349159:web:e1bb202afbca1c881c8902"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;