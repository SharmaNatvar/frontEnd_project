import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSCJssqRGWrOYy5yjlhnZKIhsQNFAczl8",
  authDomain: "simplifshop.firebaseapp.com",
  projectId: "simplifshop",
  storageBucket: "simplifshop.appspot.com",
  messagingSenderId: "980433034896",
  appId: "1:980433034896:web:7d3de3a8c0e2fcd75ec215",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const signDB = getAuth(app);
export const txtDB = getFirestore(app);
export const imgDB = getStorage(app);
