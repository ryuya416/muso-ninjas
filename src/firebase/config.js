import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZvsUoPHd9Jp5Q7img0PjupvoFM0Z-zI",
  authDomain: "muso-ninjas-58c5e.firebaseapp.com",
  projectId: "muso-ninjas-58c5e",
  storageBucket: "muso-ninjas-58c5e.appspot.com",
  messagingSenderId: "216260299119",
  appId: "1:216260299119:web:6c26670314587f9ca0809a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
