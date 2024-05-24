// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-marketplace-bd4d1.firebaseapp.com",
  projectId: "estate-marketplace-bd4d1",
  storageBucket: "estate-marketplace-bd4d1.appspot.com",
  messagingSenderId: "1061588390688",
  appId: "1:1061588390688:web:78ee4f9302412d8908fd45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
