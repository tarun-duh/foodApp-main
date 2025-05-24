import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKJ21y5ZTwx-B1tJv9ZWk2TjHTzuEZwQs",
  authDomain: "food-app-5d147.firebaseapp.com",
  projectId: "food-app-5d147",
  storageBucket: "food-app-5d147.firebasestorage.app",
  messagingSenderId: "717604957588",
  appId: "1:717604957588:web:fbdea247bf315684733381",
  measurementId: "G-RVNMWF11RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);