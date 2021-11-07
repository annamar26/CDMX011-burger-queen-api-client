import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarDatos = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3001/usuarios", {
        params: { email: email, password: password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response)=>{
        if(response.length > 0){
          let respuesta = response[0];
          cookies.set("id", respuesta.id, {path:"/"});
          cookies.set("email", respuesta.email, {path:"/"});
          alert("Bienvenido " + respuesta.email);
          window.location.href="./home"
        }else{
          alert("Email o contraseña incorrecto")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={enviarDatos}>
      <div className="login">
        <TextField
          id="email"
          label="Correo electrónico"
          variant="outlined"
          color="secondary"
          margin="normal"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          autoFocus
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
          id="password"
          label="Contraseña"
          variant="outlined"
          color="secondary"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          type="password"
          name="password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
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
          size="large"
          id="Login"
          variant="contained"
          type="submit"
          color="secondary"
          margin="normal"
        >
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
}

export default Form;
