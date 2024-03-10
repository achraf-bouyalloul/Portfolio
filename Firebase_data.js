// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTwTEwGqFBuSLHNJ-u-ICEKPa6LlzmAYM",
  authDomain: "basedonne-protfolio.firebaseapp.com",
  databaseUrl: "https://basedonne-protfolio-default-rtdb.firebaseio.com/"
  projectId: "basedonne-protfolio",
  storageBucket: "basedonne-protfolio.appspot.com",
  messagingSenderId: "914150129486",
  appId: "1:914150129486:web:f0557e13eb6623c9bf281f",
  measurementId: "G-LXV5PLBXZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);