import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF5ILPAkq6P8PSOSHDVIvvZPG-w7Sude8",
  authDomain: "apps-club-2940a.firebaseapp.com",
  projectId: "apps-club-2940a",
  storageBucket: "apps-club-2940a.appspot.com",
  messagingSenderId: "460841251953",
  appId: "1:460841251953:web:ae53a39b724a675bbe57d0",
  measurementId: "G-R5MB8D1GW4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };