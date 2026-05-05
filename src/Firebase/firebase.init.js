// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIO4uDSCsoC3UW8hfzACWt7GccFY8tpN8",
    authDomain: "food-lovers-network-8335a.firebaseapp.com",
    projectId: "food-lovers-network-8335a",
    storageBucket: "food-lovers-network-8335a.firebasestorage.app",
    messagingSenderId: "421649545192",
    appId: "1:421649545192:web:ab486630a24f20e48f565d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);