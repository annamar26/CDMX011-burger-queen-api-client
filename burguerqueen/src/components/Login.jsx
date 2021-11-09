import cocinero from "./images/cocinero.png";
import guardaespaldas from "./images/guardaespaldas.png";
import camarera from "./images/camarera.png";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { signInWithEmailAndPassword, auth } from "../lib/firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const iconoPassword = (
    <svg
      width="23"
      height="16"
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleVisibility}
    >
      <path
        d="M20.868 6.962C21.342 7.582 21.342 8.419 20.868 9.038C19.375 10.987 15.793 15 11.611 15C7.42897 15 3.84697 10.987 2.35397 9.038C2.12336 8.74113 1.99817 8.37592 1.99817 8C1.99817 7.62408 2.12336 7.25887 2.35397 6.962C3.84697 5.013 7.42897 1 11.611 1C15.793 1 19.375 5.013 20.868 6.962V6.962Z"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.611 11C13.2678 11 14.611 9.65685 14.611 8C14.611 6.34315 13.2678 5 11.611 5C9.95411 5 8.61096 6.34315 8.61096 8C8.61096 9.65685 9.95411 11 11.611 11Z"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const iconoNotPassword = (
    <svg
      width="23"
      height="9"
      viewBox="0 0 23 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleVisibility}
    >
      <path
        d="M1.87012 1C1.87012 1 5.37012 5 11.8701 5C18.3701 5 21.8701 1 21.8701 1"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.87012 2.645L1.87012 5"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.87 5L19.874 2.64799"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.78412 4.67999L7.87012 7.49999"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9331 4.688L15.8701 7.5"
        stroke="#A3A3A3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const enviarDatos = (event) => {
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
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Fragment>
      <main>
        <div className="Usuarios">
          <img src={guardaespaldas} alt=""></img>
          <img src={camarera} alt=""></img>
          <img src={cocinero} alt=""></img>
        </div>
        <form onSubmit={enviarDatos}>
          <h1>Inicia Sesión</h1>
          <TextField
            fullWidth
            autoFocus
            color="secondary"
            margin="normal"
            variant="outlined"
            name="email"
            type="email"
            label="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8701 6C22.8701 4.9 21.9701 4 20.8701 4H4.87012C3.77012 4 2.87012 4.9 2.87012 6V18C2.87012 19.1 3.77012 20 4.87012 20H20.8701C21.9701 20 22.8701 19.1 22.8701 18V6ZM20.8701 6L12.8701 11L4.87012 6H20.8701ZM20.8701 18H4.87012V8L12.8701 13L20.8701 8V18Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            color="secondary"
            margin="normal"
            variant="outlined"
            name="password"
            type={visible ? "text" : "password"}
            label="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {visible ? iconoPassword : iconoNotPassword}
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            id="Login"
            variant="contained"
            margin="large"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </form>
      </main>
    </Fragment>
  );
}
export default Login;
