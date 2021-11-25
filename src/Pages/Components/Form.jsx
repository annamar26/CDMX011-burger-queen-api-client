import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createEmployee, loginFb, messageError } from "../../lib/FirebaseAut";
import emailIco from "../../images/emailIco.png";
import iconoPassword from "../../images/iconoPassword.png";
import iconoNotPassword from "../../images/iconoNotPassword.png";
import warning from "../../images/warning.png";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { MenuItem, Select, OutlinedInput, InputLabel} from "@mui/material";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState({});
  const [type, setType]= useState('')

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleChange = (e) => {
    setType(e.target.value);

    if (type === "admin") {
      setRole({ ...role, admin: true });
    }else if (type === "waiter") {
      
      setRole({ ...role, admin:false, waiter: true })
    }else{
      setRole({ ...role, admin:false, kitchen: true })
    }
    console.log(role)
  };
  return window.location.pathname === "/" ? (
    <form
      onSubmit={(e) => loginFb(e, email, password)}
      className="form"
      id="form"
      data-testid="form"
    >
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
            <InputAdornment position="end" id="show">
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
            <InputAdornment
              position="end"
              onClick={toggleVisibility}
              id="unShow"
            >
              {visible ? (
                <img src={iconoPassword} alt=""></img>
              ) : (
                <img src={iconoNotPassword} alt=""></img>
              )}
            </InputAdornment>
          ),
        }}
      />
      <p>
        {messageError === "" ? "" : <img src={warning} alt=""></img>}{" "}
        {messageError}
      </p>

      <Button
        fullWidth
        id="Login"
        variant="contained"
        margin="large"
        type="submit"
        data-testid="Login"
      >
        Iniciar Sesión
      </Button>
    </form>
  ) : (
    <form
      onSubmit={(e) => createEmployee(e, email, password, name, role)}
      className="form"
      id="form2"
      data-testid="form"
    >
      <h1>Registrar nuevo empleado</h1>
      <TextField
        fullWidth
        autoFocus
        color="secondary"
        margin="normal"
        variant="outlined"
        id="name"
        type="text"
        label="Nombre completo del empleado"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" id="show">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
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
            <InputAdornment position="end" id="show">
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
        type="text"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />
      <p>
        {messageError === "" ? "" : <img src={warning} alt=""></img>}{" "}
        {messageError}
      </p>
     <InputLabel id="demo-multiple-name-label">Name</InputLabel>
    
      
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        
        value={type}
                input={<OutlinedInput label="Name" />}
        fullWidth
        onChange={(e)=> handleChange(e)}
      >
        <MenuItem value={"admin"}>Aministrador</MenuItem>
        <MenuItem value={"waiter"}>Mesero</MenuItem>
        <MenuItem value={"kitchen"}>Cocinero</MenuItem>
      </Select>
      <Button
        fullWidth
        id="Login"
        variant="contained"
        margin="large"
        type="submit"
        data-testid="Login"
      >
        Registrar
      </Button>
    </form>
  );
}

export default Form;
