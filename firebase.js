import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBGxt4zv9v1Vs8Ddy5aJv4xAvHB0VR2pko",
    authDomain: "natebook-407ec.firebaseapp.com",
    projectId: "natebook-407ec",
    storageBucket: "natebook-407ec.appspot.com",
    messagingSenderId: "85632191082",
    appId: "1:85632191082:web:90502f7b0cf8cd68161813"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };