
import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { enviarDatos, messageError } from "../lib/FirebaseAut"
import emailIco from '../images/emailIco.png'
import iconoPassword from '../images/iconoPassword.png'
import iconoNotPassword from '../images/iconoNotPassword.png'
import warning from '../images/warning.png'

function Form() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
      setVisible(!visible);
    };

   
      return (
      <form onSubmit={(e) => enviarDatos(e, email, password)} className='form' id='form' data-testid="form">
      <h1>Inicia Sesión</h1>
      <TextField
        fullWidth
        autoFocus
        color="secondary"
        margin="normal"
        variant="outlined"
        id="email"
        type="email"
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" id='show' >
             <img src={emailIco} alt=""></img>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        color="secondary"
        margin="normal"
        variant="outlined"
        id="password"
        type={visible ? "text" : "password"}
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={toggleVisibility} id='unShow'>
        {visible ?  <img src={iconoPassword} alt=""></img>
            :   <img src={iconoNotPassword} alt=""></img>
          }
            </InputAdornment>
          ),
        }} 
      />
      <p>{messageError === '' ? "":<img src={warning} alt=""></img>} {messageError}</p>

      <Button
        fullWidth
        id="Login"
        variant="contained"
        margin="large"
        type="submit"
        data-testid='Login'
       
       
      >
        Iniciar Sesión
      </Button>
    </form> 
  
  )
}

export default Form

