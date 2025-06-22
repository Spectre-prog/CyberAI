import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDKE8pJE5t7Wjlpk7dgoKmPvVAmRqC_MiM",
  authDomain: "ai-project-bb988.firebaseapp.com",
  projectId: "ai-project-bb988",
  storageBucket: "ai-project-bb988.firebasestorage.app",
  messagingSenderId: "811289006586",
  appId: "1:811289006586:web:d7b170cf2c5e488cf89443",
  measurementId: "G-QTPKZEFC74"
};


const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();