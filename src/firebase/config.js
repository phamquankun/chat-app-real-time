import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8iDlXI4YNthXd-9FqyZVHg8An7t-wOK0",
    authDomain: "chat-app-ee93e.firebaseapp.com",
    projectId: "chat-app-ee93e",
    storageBucket: "chat-app-ee93e.appspot.com",
    messagingSenderId: "1007386255345",
    appId: "1:1007386255345:web:c8033487a71021b0a1ae50",
    measurementId: "G-FY9DNQ062M"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;