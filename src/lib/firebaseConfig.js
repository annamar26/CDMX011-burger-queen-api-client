// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTtniO4q40Zef05s9xwfFBd94RNmIIEpo",
    authDomain: "burguerqueenmx011.firebaseapp.com",
    projectId: "burguerqueenmx011",
    storageBucket: "burguerqueenmx011.appspot.com",
    messagingSenderId: "65952326929",
    appId: "1:65952326929:web:4707c403cfec16e22ed8b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword }