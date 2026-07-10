// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqIk41ZG-Y9raN_F7rbbI-84QLYuv6gE",
  authDomain: "handmade-flower-website.firebaseapp.com",
  projectId: "handmade-flower-website",
  storageBucket: "handmade-flower-website.firebasestorage.app",
  messagingSenderId: "111702904979",
  appId: "1:111702904979:web:da9023b41109ed0a99fd66",
  measurementId: "G-67829B03NR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db };