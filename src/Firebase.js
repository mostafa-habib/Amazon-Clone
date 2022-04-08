import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8zyk-WyyRcwVmA0SmJZMpf9s8yVgk2o",
  authDomain: "amzon-clone-41385.firebaseapp.com",
  projectId: "amzon-clone-41385",
  storageBucket: "amzon-clone-41385.appspot.com",
  messagingSenderId: "497577916800",
  appId: "1:497577916800:web:bb8cf8fa360bf6fe2ea965",
  measurementId: "G-NXPB2BZK6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore(app);


export { auth, db }
