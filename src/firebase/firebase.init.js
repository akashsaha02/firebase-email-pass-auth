// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz3nkaYuDXokplWk4qw0tQE--UEhq8nA0",
    authDomain: "email-pass-auth-5269d.firebaseapp.com",
    projectId: "email-pass-auth-5269d",
    storageBucket: "email-pass-auth-5269d.firebasestorage.app",
    messagingSenderId: "223711444536",
    appId: "1:223711444536:web:e916a66a06a7f8c25cf0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
