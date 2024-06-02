const firebase = require('firebase');

firebaseConfig = {
    apiKey: "AIzaSyANwMldcFgz-JpGOHsl6suD8JFP_3AyoCQ",
    authDomain: "hiiblr.firebaseapp.com",
    projectId: "hiiblr",
    storageBucket: "hiiblr.appspot.com",
    messagingSenderId: "225956422093",
    appId: "1:225956422093:web:5f874af2ab0fd3ac856484",
    measurementId: "G-1EP5CFWFD8"
  };
  firebase.initializeApp(firebaseConfig)
  const db= firebase.firestore()
  const User=db.collection("User")
