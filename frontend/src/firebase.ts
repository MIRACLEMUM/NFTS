// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhoL69FLd5DLm7NFJlWjMowDvyAGmXjQ",
  authDomain: "nftmarket-auth-322cc.firebaseapp.com",
  projectId: "nftmarket-auth-322cc",
  storageBucket: "nftmarket-auth-322cc.firebasestorage.app",
  messagingSenderId: "43691788906",
  appId: "1:43691788906:web:8f49ea7069e5208e14d813",
  measurementId: "G-S2TERXQV6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// ✅ Initialize Firebase Auth and Google provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
