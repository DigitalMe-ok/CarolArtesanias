// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjpjTdU7FBLtpwOdII-WdM7RWiGrnDg6M",
  authDomain: "carolartesanias-78507.firebaseapp.com",
  projectId: "carolartesanias-78507",
  storageBucket: "carolartesanias-78507.firebasestorage.app",
  messagingSenderId: "1071295939229",
  appId: "1:1071295939229:web:7b525dd46f6c9085ca4a74",
  measurementId: "G-9KNG45M2GN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();