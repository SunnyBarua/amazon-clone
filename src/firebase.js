import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6JPj9ZiCQIM2lVFL3xask4el14BUFXAk",
  authDomain: "clone-c8f41.firebaseapp.com",
  databaseURL: "https://clone-c8f41.firebaseio.com",
  projectId: "clone-c8f41",
  storageBucket: "clone-c8f41.appspot.com",
  messagingSenderId: "509983495377",
  appId: "1:509983495377:web:87eec3efb7e647763961f0",
  measurementId: "G-P5HYYXD83M",
});

const auth = firebaseApp.auth();

export { auth };
