import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCR-o5Ar09c7Uv1sZzWmPuh-yi0PqlEKEQ",
    authDomain: "nifty-expanse-288613.firebaseapp.com",
    databaseURL: "https://nifty-expanse-288613.firebaseio.com",
    projectId: "nifty-expanse-288613",
    storageBucket: "nifty-expanse-288613.appspot.com",
    messagingSenderId: "936644464370",
    appId: "1:936644464370:web:6d41314f8943a1bdd78a6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;