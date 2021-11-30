import React, { Fragment, useState } from "react";
import {
  FormControlLabel,
  Input,
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
  FilledInput,
  Button,
} from "@mui/material";
import EmployeeModal from "./EmployeeModal";

export const EmployeeAndProductEdit = ({ array, updateItem, deleteItem }) => {
  const [name, setName] = useState("");
  return (
    <Fragment>
      {array.map((item) => (
        <Card className="orden" key={item.id}>
          <CardActions className="orderHeader" align="center">
            <EmployeeModal
              orders={array}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
            <Typography
              sx={{ fontSize: 22 }}
              gutterBottom
              align="center"
              color="secondary"
            >
              Empleado:#{item.id}
            </Typography>
          </CardActions>
          <CardContent>
          
            
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};
