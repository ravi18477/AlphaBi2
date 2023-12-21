import { initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBvJhIsvBygtD62Ow-jDM61-EQjJi5tM-U",
  authDomain: "authentication-c2564.firebaseapp.com",
  projectId: "authentication-c2564",
  storageBucket: "authentication-c2564.appspot.com",
  messagingSenderId: "601107287455",
  appId: "1:601107287455:web:84945984595ce3ae2541aa",
  measurementId: "G-HTZVT57VFH"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getAuth(app);
export default database;