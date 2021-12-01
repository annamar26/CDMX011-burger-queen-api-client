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

export const EditEmployeeForm = ({header, item, handleClose}) => {
    const [email, setEmail] = useState(item.email);
  const [name, setName] = useState(item.name);
  const [password, setPassword] = useState(item.password);
  
  
  const { open, handleOpen, handleContent, content} = useSetOpenModal();
  const {updateEmployee} = useGetEmployes()
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

  const [role, setRole] = useState(roles[0]);

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
         
        
 updateEmployee(item.id,{name, email, password, role})
  .then(()=>{
    handleContent("Empleado actualizado correctamente")

    setTimeout(handleOpen, 2000);
  })
  .catch(()=>{
    handleContent("Ocurrió un error, intente nuevamente")
    setTimeout(handleOpen, 2000);
  })
  
  
            
        
  
        }}
        className="form"
        id="form2"
        data-testid="form"
      >
        <h1>{header}</h1>
       
        <TextField
          fullWidth
          editable='true'
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
          editable='true'
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
        editable='true'
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
          value={item.role}
            
          
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
           type='submit'
           
          >Actualizar</Button>
         
       
           <DefaultModal open={open} handleClose={handleClose}>
             
            {content === "Empleado actualizado correctamente" ? (
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
    
}
