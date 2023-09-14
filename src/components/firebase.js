import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDgZLX9qCRiXSrEV7uRVGasPf21bjFuGcc",
  authDomain: "disenyclone-project.firebaseapp.com",
  projectId: "disenyclone-project",
  storageBucket: "disenyclone-project.appspot.com",
  messagingSenderId: "787247261577",
  appId: "1:787247261577:web:b0fd6636cd1d1bc96f2358",
  measurementId: "G-L98JEQ6CT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
