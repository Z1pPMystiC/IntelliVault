// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAvD5knMZg5zaQ5cyedR5YyV0szUZ_bE-g",
  authDomain: "intellivault-94df2.firebaseapp.com",
  projectId: "intellivault-94df2",
  storageBucket: "intellivault-94df2.appspot.com",
  messagingSenderId: "262110899743",
  appId: "1:262110899743:web:61054ec326408fb7d8af2a"
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
