// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlgxwefeV7GtVzUFRpgTRhEJ6BbJyKnGM",
  authDomain: "realtor-clone-42fc0.firebaseapp.com",
  projectId: "realtor-clone-42fc0",
  storageBucket: "realtor-clone-42fc0.appspot.com",
  messagingSenderId: "324547543966",
  appId: "1:324547543966:web:36f4953e57928de0634c8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()