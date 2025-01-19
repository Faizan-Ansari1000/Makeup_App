// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMdBt4A_emuGEJAT_hZxD2xzj3idp1wc",
  authDomain: "recipee-495d4.firebaseapp.com",
  projectId: "recipee-495d4",
  storageBucket: "recipee-495d4.firebasestorage.app",
  messagingSenderId: "833183640430",
  appId: "1:833183640430:web:8754a2ebfc811ad95a6f7f",
  measurementId: "G-Z93GG2HQS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;