// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHwSTxbrrpCnX4BQXDnFLwMlsf6QCHKSg",
  authDomain: "u-fill-academy-contact-base.firebaseapp.com",
  projectId: "u-fill-academy-contact-base",
  storageBucket: "u-fill-academy-contact-base.appsopt.com",
  messagingSenderId: "997593167211",
  appId: "1:997593167211:web:898360f663c9e2eb78482e",
  measurementId: "G-0QCNDH4TN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);