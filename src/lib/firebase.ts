// Firebase initialization for Marvel Snaps
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5M8T6DCZ00kBiNJ51HzLj0H36u31eQRo",
  authDomain: "marvelsnaps-e6e19.firebaseapp.com",
  projectId: "marvelsnaps-e6e19",
  storageBucket: "marvelsnaps-e6e19.firebasestorage.app",
  messagingSenderId: "23868854930",
  appId: "1:23868854930:web:9e13aabdc52220c1b9cc4b",
  measurementId: "G-SFT2W2GKBR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
