import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDSCJssqRGWrOYy5yjlhnZKIhsQNFAczl8",
  authDomain: "simplifshop.firebaseapp.com",
  projectId: "simplifshop",
  storageBucket: "simplifshop.appspot.com",
  messagingSenderId: "980433034896",
  appId: "1:980433034896:web:7d3de3a8c0e2fcd75ec215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const reduxSagaApp = new getFirebase(app)
export const idPassDB = getAuth(app)
export const txtDB =  getFirestore(app);

