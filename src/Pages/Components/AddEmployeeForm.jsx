import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  createEmployee,
 
  contentModal,

} from "../../lib/FirebaseAut";
import emailIco from "../../images/emailIco.png";

import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Modal, Box, Typography, MenuItem } from "@mui/material";
import useSetOpenModal from "../../hooks/useSetOpenModal";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { red, green } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigth: 600,
  bgcolor: "background.paper",
  border: "2px solid #800080",
  borderRadius: "1.5vw",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const AddEmployeeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState({});
  const [valor, setValor] = useState("");
  const { handleClose, open, handleOpen } =
    useSetOpenModal();
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
    setRole(e.target.value);

    if (role.value === "admin") {
      setRole({ ...role, admin: true });
      setValor("Administrador");
    } else if (role.value === "waiter") {
      setRole({ ...role, admin: false, waiter: true });
      setValor("Mesero");
    } else {
      setRole({ ...role, admin: false, kitchen: true });
      setValor("Cocinero");
    }
    console.log(role);
  };
  return (
    <form
      onSubmit={(e) => {
        createEmployee(e, email, password, name, role);

        setTimeout(handleOpen, 1500);
      }}
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

      <TextField
        id="outlined-select-currency"
        select
        label="Permisos"
        value={role.value}
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
        Registrar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {contentModal === "Registro exitoso" ? (
            <CheckCircleIcon
              alignItems="center"
              fontSize="large"
              sx={{ color: green[500] }}
            />
          ) : (
            <ErrorOutlineRoundedIcon
              alignItems="center"
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
            {contentModal}
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
        </Box>
      </Modal>
    </form>
  );
};
