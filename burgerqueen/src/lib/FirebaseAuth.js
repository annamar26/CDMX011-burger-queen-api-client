/*import { createUserWithEmailAndPassword } from "@firebase/auth";
import { dataApi } from "../api/dataApi";
import { useInputs } from "../hooks/useInputs";
import { auth, signInWithEmailAndPassword } from "./firebaseConfig";
export const FirebaseAuth = () => {
  const { showError, addDataEmployee } = useInputs();

  const LogIn = (e, value, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, value, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        if (user === "cocina@ejemplo.com") {
          window.location.href = "./kitchen";
        } else if (user === "mesero@ejemplo.com") {
          window.location.href = "./home";
        }
      })
      .catch((err) => {
        if (err) {
          showError();
        }
      });
  };
  const Register = (e, value, password, name, job) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, value, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        console.log(name);
        dataApi
          .post("http://localhost:3001/employees", {
            id: "",
            uid: user,
            name: name,
            rol: job,
            email: value,
            password: password,
          })
          .then((res) => {
            addDataEmployee(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    Register,
    LogIn,
  };
};
*/