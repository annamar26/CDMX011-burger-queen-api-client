import React, { Fragment } from "react";
import {
  FormControlLabel,
  Checkbox,
  form,
  Paper,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
} from "@mui/material";
import { EmployeeModal } from "./EmployeeModal";

export const EmployeeAndProductEdit = ({ array, updateItem }) => {
  return (
    <Fragment>
      {array.map((item, index) => (
        <Card id="orden" key={item.email}>
          <CardActions id="orderHeader" align="center">
            <Typography
              sx={{ fontSize: 22 }}
              gutterBottom
              align="center"
              color="secondary"
            >
              Empleado:#{item.email}
            </Typography>
            <EmployeeModal action={"Editar"} array={array} item={item} updateItem={updateItem}/>
          </CardActions>
          <CardContent>
            <form>
              <TextField
                fullWidth
                autoFocus
                syze="small"
                color="secondary"
                margin="normal"
                variant="filled"
                id="name"
                type="name"
                label="Nombre completo del empleado"
                value={item.name}
                onChange={(e) => console.log(e.target.value)}
                required
              />
              <TextField
                fullWidth
                autoFocus
                syze="small"
                color="secondary"
                margin="normal"
                variant="filled"
                id="email"
                type="email"
                label="Correo electrónico"
                value={item.email}
                onChange={(e) => console.log(e.target.value)}
                required
              />
              <TextField
                fullWidth
                autoFocus
                syze="small"
                color="secondary"
                margin="normal"
                variant="filled"
                id="password"
                type="text"
                label="Contraseña"
                value={item.password}
                onChange={(e) => console.log(e.target.value)}
                required
              />
              <FormControlLabel
                label="Admin"
                control={<Checkbox checked={true} />}
              />
              <FormControlLabel
                label="Cocinero"
                control={<Checkbox checked={false} />}
              />
              <FormControlLabel
                label="Mesero"
                control={<Checkbox checked={true} />}
              />
            </form>
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};
