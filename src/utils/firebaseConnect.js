const firebaseURL = "https://portfolio-d23d4.firebaseio.com/projects"
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBof0e1EFZsIjQQQqTV0yuQdnJ8itnAPIs",

  authDomain: "portfolio-d23d4.firebaseapp.com",

  databaseURL: "https://portfolio-d23d4.firebaseio.com",

  projectId: "portfolio-d23d4",

  storageBucket: "portfolio-d23d4.appspot.com",

  messagingSenderId: "203850134571",

  appId: "1:203850134571:web:c590911ae151d5bf52e66e",

  measurementId: "G-JWLT4BT84W"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);