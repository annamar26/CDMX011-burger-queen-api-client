import { auth, signInWithEmailAndPassword } from "./firebaseConfig";

export const logIn = (e, value, password) => {
  //Funcionalidad al botón
  e.preventDefault();
  signInWithEmailAndPassword(auth, value, password)
    .then((userCredential) => {
      const user = userCredential.user.uid;
      console.log(user);
      window.location.href = "./home";
    })
    .catch((err) => {
      console.log(err);
      alert("Error al ingresar correo electrónico o contraseña");
    });
};
