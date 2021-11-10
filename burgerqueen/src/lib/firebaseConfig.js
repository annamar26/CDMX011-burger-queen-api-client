import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyCBAHOrC7A0KHSqCazjjeEaxsOfwa967pg",
  authDomain: "burgerqueen-970e4.firebaseapp.com",
  projectId: "burgerqueen-970e4",
  storageBucket: "burgerqueen-970e4.appspot.com",
  messagingSenderId: "24043847914",
  appId: "1:24043847914:web:3b2f7a85547e669ab41793",
  measurementId: "G-YJ5BJWKNKC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged}