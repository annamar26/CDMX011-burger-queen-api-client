import { signInWithEmailAndPassword, auth } from "../lib/firebaseConfig";
export const enviarDatos = (event, email, password) => {
    event.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        window.location.href = "/menu";

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       alert(errorCode, errorMessage);
      });
  };