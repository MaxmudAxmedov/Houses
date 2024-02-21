// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "houses-5cd57.firebaseapp.com",
  projectId: "houses-5cd57",
  storageBucket: "houses-5cd57.appspot.com",
  messagingSenderId: "598359295544",
  appId: "1:598359295544:web:77e47b22f841dfabe348cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);