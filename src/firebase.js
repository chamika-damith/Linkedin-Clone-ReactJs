// Import only the functions you need from the modular Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "linkedin-clone-55f6b.firebaseapp.com",
  projectId: "linkedin-clone-55f6b",
  storageBucket: "linkedin-clone-55f6b.appspot.com",
  messagingSenderId: "202981601959",
  appId: "1:202981601959:web:06344d75b6cacd90656182"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
