// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import dotenv from 'dotenv'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

dotenv.config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: dotenv.apiKey,
  authDomain: dotenv.authDomain,
  projectId: dotenv.projectId,
  storageBucket: dotenv.storageBucket,
  messagingSenderId: dotenv.messagingSenderId,
  appId: dotenv.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
