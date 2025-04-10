// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4WInU1-mCf3Bpb5l-eplqZ1PWMESzyy0",
    authDomain: "fir-intro-d7672.firebaseapp.com",
    projectId: "fir-intro-d7672",
    storageBucket: "fir-intro-d7672.firebasestorage.app",
    messagingSenderId: "237716321261",
    appId: "1:237716321261:web:13515ad5873e6423196de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;