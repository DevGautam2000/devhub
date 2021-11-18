import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzjbgg3AFA9FiRkEzKAu563vm756FCn2Q",
  authDomain: "devhub-1231.firebaseapp.com",
  projectId: "devhub-1231",
  storageBucket: "devhub-1231.appspot.com",
  messagingSenderId: "1027033250178",
  appId: "1:1027033250178:web:9373b0c446384a4f93b79b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth, storage };
