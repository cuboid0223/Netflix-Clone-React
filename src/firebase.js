import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBVjwam2iJpNj5oKz1edjyRM01Xw9nb68",
  authDomain: "netflix-clone-5fa40.firebaseapp.com",
  databaseURL: "https://netflix-clone-5fa40.firebaseio.com",
  projectId: "netflix-clone-5fa40",
  storageBucket: "netflix-clone-5fa40.appspot.com",
  messagingSenderId: "365034990857",
  appId: "1:365034990857:web:36759ddb8228bf481637d8",
  measurementId: "G-65NXGM2E8N",
});

const db = firebaseApp.firestore();

export default db;

//
