import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzqsXhtuyOKIjhgbwKUrc8fOrdoGIuBlM",
  authDomain: "portfolio-f2af8.firebaseapp.com",
  projectId: "portfolio-f2af8",
  storageBucket: "portfolio-f2af8.appspot.com",
  messagingSenderId: "1095060759225",
  appId: "1:1095060759225:web:6edad924c0a4c2b160b168",
  measurementId: "G-Q6Q1293R1R"
});

const db = firebaseApp.firestore();

export default db;