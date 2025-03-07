// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0mP1I0JpSgw2N0SEo2YPHxCh8BAcMMMc",
    authDomain: "netflixgpt-66e93.firebaseapp.com",
    projectId: "netflixgpt-66e93",
    storageBucket: "netflixgpt-66e93.firebasestorage.app",
    messagingSenderId: "116833072344",
    appId: "1:116833072344:web:0aeb0fdb648f2169aad3ad",
    measurementId: "G-Y2R4CVSYXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


