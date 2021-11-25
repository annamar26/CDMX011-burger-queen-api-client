import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from "../lib/firebaseConfig";
import Axios from 'axios'

let messageError = ''
const loginFb = (event, email, password) => {

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
const createEmployee = (event, email, password, fullname, objeto) => {

    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, )
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Axios.post("https://fake-server-burguer-queen.herokuapp.com/users", {
                id: user.uid,
                name: fullname,
                email: email,
                role: objeto



            });
            console.log(user);


            // ...
        })
        .catch(() => {

            messageError = 'Error. Intente nuevamente'
        });





};


const getUser = (user = auth.currentUser) => {
    let email = ''
    let uid = ''
    if (user !== null) {

        email = user.email;

        uid = user.uid;
    }

    return { email, uid }
}
export { getUser, messageError, loginFb, createEmployee }