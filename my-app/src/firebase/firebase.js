import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6nC_rs5Mp3IkhK6zzUM0rfjCHjTNGQuc",
  authDomain: "bendu-50ddb.firebaseapp.com",
  projectId: "bendu-50ddb",
  storageBucket: "bendu-50ddb.appspot.com",
  messagingSenderId: "329010804063",
  appId: "1:329010804063:web:8b32f057dd1c338a4ab2ea",
  measurementId: "G-6ZFQ2GPL9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)