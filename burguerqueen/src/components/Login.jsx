import Logo from "./images/Logo.png";
import cocinero from "./images/cocinero.png";
import guardaespaldas from "./images/guardaespaldas.png";
import camarera from "./images/camarera.png";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
 
  return (
    <Fragment>
      <header>
        <img src={Logo} alt=""></img>
        <section>
          <h1>Inicia sesión</h1>
        </section>
      </header>
      <main>
        <div className="Usuarios">
          <img src={guardaespaldas} alt=""></img>
          <img src={camarera} alt=""></img>
          <img src={cocinero} alt=""></img>
        </div>
        <form onSubmit={enviarDatos}>
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
                <InputAdornment >
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
            type="password"
            label="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
         
            InputProps={{
              endAdornment: (
                <InputAdornment >
                
                  <svg
                  endAdornment
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.87012 17H22.8701V19H2.87012V17ZM4.02012 12.95L4.87012 11.47L5.72012 12.95L7.02012 12.2L6.17012 10.72H7.87012V9.22H6.17012L7.02012 7.75L5.72012 7L4.87012 8.47L4.02012 7L2.72012 7.75L3.57012 9.22H1.87012V10.72H3.57012L2.72012 12.2L4.02012 12.95V12.95ZM10.7201 12.2L12.0201 12.95L12.8701 11.47L13.7201 12.95L15.0201 12.2L14.1701 10.72H15.8701V9.22H14.1701L15.0201 7.75L13.7201 7L12.8701 8.47L12.0201 7L10.7201 7.75L11.5701 9.22H9.87012V10.72H11.5701L10.7201 12.2V12.2ZM23.8701 9.22H22.1701L23.0201 7.75L21.7201 7L20.8701 8.47L20.0201 7L18.7201 7.75L19.5701 9.22H17.8701V10.72H19.5701L18.7201 12.2L20.0201 12.95L20.8701 11.47L21.7201 12.95L23.0201 12.2L22.1701 10.72H23.8701V9.22Z"
                      fill="#A3A3A3"
                    />
                  </svg>
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
