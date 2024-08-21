// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHir1veSWKCao6EpRPH_1CTw7spJyK6NU",
  authDomain: "web-jing.firebaseapp.com",
  projectId: "web-jing",
  storageBucket: "web-jing.appspot.com",
  messagingSenderId: "957852330132",
  appId: "1:957852330132:web:60ddd2f33ed48131e3ac81",
  measurementId: "G-TX5T9YPDV8"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();