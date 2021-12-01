import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import emailIco from "../../images/emailIco.png";

import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Typography, MenuItem } from "@mui/material";
import useSetOpenModal from "../../hooks/useSetOpenModal";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { red, green } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DefaultModal from "./DefaultModal"
import useGetEmployes from "../../hooks/useGetEmployes"


export const AddProductsForm = ({addProduct, header}) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null)
  const [type, setType] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  
  const { handleClose, open, handleOpen, handleContent, content} = useSetOpenModal();
  const {searchEmployee} = useGetEmployes()
  const roles = [
    {
      value: "waiter",
      label: "Mesero",
    },
    {
      value: "kitchen",
      label: "Cocinero",
    },
    {
      value: "admin",
      label: "Administrador",
    },
  ];



  const handleChange = (e) => {
    

    if (e.target.value === "admin") {
      setRole({  admin: true });
      
    } else if (e.target.value === "waiter") {
      setRole({  admin: false, waiter: true });
     
    } else if (e.target.value === "kitchen"){
      setRole({  admin: false, kitchen: true });
       }
   
    
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
     
searchEmployee(name, email, role)
.then((res)=>{
  if(res.length){
    addEmployee(name, email, password, role);
    handleContent('Registro exitoso')
  }else{
    handleContent('Ya existe un usuario registrado con los datos proporcionados')
  }
}
).catch(()=>{
  handleContent('Ocurrió un error, intente nuevamente')
})
          
          
      

        setTimeout(handleOpen, 2000);
      }}
      className="form"
      id="form2"
      data-testid="form"
    >
      <h1>{header}</h1>
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

      <TextField
        id="outlined-select-currency"
        select
        label="Permisos"
        onChange={handleChange}
        fullWidth
        placeholder="Permisos"
        color="secondary"
        margin="normal"
        
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        fullWidth
        id="Login"
        variant="contained"
        margin="large"
        type="submit"
        data-testid="Login"
      >
        {header}
      </Button>
     
            <DefaultModal open={open} handleClose={handleClose}>
           
          {content === "Registro exitoso" ? (
            <CheckCircleIcon
              className='modal-icon'
              fontSize="large"
              sx={{ color: green[500] }}
            />
          ) : (
            <ErrorOutlineRoundedIcon
            className='modal-icon'
              fontSize="large"
              sx={{ color: red[500] }}
            />
          )}
          <Typography
          align="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {content}
        </Typography>

        <section id="modalButtons">
          <Button
            align="center"
            variant="contained"
            margin="large"
            color="secondary"
            size="small"
            type="button"
            onClick={handleClose}
          >
            OK
          </Button>
        </section>
         
     
      </DefaultModal>
    </form>
  );
};
