import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

     apiKey: "AIzaSyAJATqEt6bL61bNv6yjLFyf720Wz7_yLS4",
     authDomain: "todo-app-f4bad.firebaseapp.com",
     projectId: "todo-app-f4bad",
     storageBucket: "todo-app-f4bad.appspot.com",
     messagingSenderId: "551612093487",
     appId: "1:551612093487:web:d110467bc3dee1c00da2da",
     measurementId: "G-BGLRCJQRKC"
});

const db = firebaseApp.firestore();

export default db;