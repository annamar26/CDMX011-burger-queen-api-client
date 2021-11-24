import { auth, signInWithEmailAndPassword } from "./firebaseConfig";

export const logIn = (e, value, password) => {
  //Funcionalidad al botón
  e.preventDefault();
  signInWithEmailAndPassword(auth, value, password)
    .then((userCredential) => {
      const user = userCredential.user.email;
      if (user === "cocina@ejemplo.com") {
              window.location.href = "./kitchen";

      }else if( user === "mesero@ejemplo.com"){
        window.location.href = "./home"
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Error al ingresar correo electrónico o contraseña");
    });
};
