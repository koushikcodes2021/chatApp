import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcwhEdEWFbqj29TwfT0bUXlnWLRo-iToU",
  authDomain: "chatapp-7ac70.firebaseapp.com",
  projectId: "chatapp-7ac70",
  storageBucket: "chatapp-7ac70.appspot.com",
  messagingSenderId: "529879314845",
  appId: "1:529879314845:web:be8a198ba3ec9cda2b7f74",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
