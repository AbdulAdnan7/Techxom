// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3yIwUaFXdw_XKDGSk-jzFJeZXDP_KaRk",
  authDomain: "techxom-3a899.firebaseapp.com",
  projectId: "techxom-3a899",
  storageBucket: "techxom-3a899.firebasestorage.app",
  messagingSenderId: "346964352480",
  appId: "1:346964352480:web:7023d7a2f1fdd707ecdf85",
  measurementId: "G-5TYF7BKMP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()