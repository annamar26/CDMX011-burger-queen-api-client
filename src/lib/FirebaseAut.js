import { signInWithEmailAndPassword, auth, createUserWithEmailAndPassword } from "../lib/firebaseConfig";

let messageError = ''
const enviarDatos = (event, email, password) => {

    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            window.location.href = "/menu";

            // ...
        })
        .catch(() => {

            messageError = 'Verifica las credenciales'
        });





};
const registrarUsuario = (event, email, password) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('usuario creado')
                // ...
        })
        .catch((error) => {
            messageError = 'Ocurrió un error, verifique la información proporcionada'
                // ..
        });
}


const getUser = (user = auth.currentUser) => {
    let email = ''
    let uid = ''
    if (user !== null) {

        email = user.email;

        uid = user.uid;
    }

    return { email, uid }
}
export { getUser, messageError, enviarDatos, registrarUsuario }