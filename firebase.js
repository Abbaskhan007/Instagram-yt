// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1y_DKob12dcDdSaDxEnp1nbTw9K-GDy8",
  authDomain: "insta-yt-2-f8e82.firebaseapp.com",
  projectId: "insta-yt-2-f8e82",
  storageBucket: "insta-yt-2-f8e82.appspot.com",
  messagingSenderId: "490955943334",
  appId: "1:490955943334:web:4ee22129bf63d210f27367",
  measurementId: "G-D19QCSFFPJ"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};