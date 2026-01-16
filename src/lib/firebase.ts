// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTivNmW__Kz3xpRN14rDc4erN93Az7XE",
  authDomain: "portfolio-f5973.firebaseapp.com",
  projectId: "portfolio-f5973",
  storageBucket: "portfolio-f5973.firebasestorage.app",
  messagingSenderId: "645749078000",
  appId: "1:645749078000:web:030761cd0544e376870f35",
  measurementId: "G-6VPFSXYE37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};

import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);