import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK_ImsKGmRHC0ZTBKLLRvqIPsFaxzX8Ps",
  authDomain: "patika-alp.firebaseapp.com",
  projectId: "patika-alp",
  storageBucket: "patika-alp.appspot.com",
  messagingSenderId: "362828710365",
  appId: "1:362828710365:web:1b55dca33c347844fcf634",
  measurementId: "G-5ZSWYET66V",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
