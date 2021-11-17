import React, { useState } from "react";
import useSetComanda from "../hooks/useSetComanda";
import {
  Card,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import plus from "../images/plus.png";
import deleteIco from "../images/deleteIco.png";
import { TextField } from "@mui/material";
import ButtonEnviarOrden from "./ButtonEnviarOrden";
import { getUser } from "../lib/FirebaseAut";

const Comanda = ({ order, cuenta }) => {
  const { suma, sumar, obtenerNombre, cliente, addProduct } = useSetComanda();

  const { email } = getUser();
  return (
    <div>
      <section id="cliente">
        <h2>Cliente:</h2>
        <TextField
          id="clientName"
          size="small"
          variant="outlined"
          color="secondary"
          onChange={(e) => obtenerNombre(e.target.value)}
        ></TextField>
      </section>
      <Card id="Comanda">
        <CardContent>
          <TableContainer>
            <Table stickyHeader aria-label='sticky table"'>
              <TableHead color="primary" id="tableHeader">
                <TableRow>
                <TableCell width="10" align="center">
                    Cantidad
                  </TableCell>
                  <TableCell width="50" align="center">
                    Produto
                  </TableCell>
                  <TableCell width="20" align="center">
                    Añadir/Eliminar
                  </TableCell>
                  <TableCell width="20" align="center">
                    Precio
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((item, index) => (
                  <TableRow key={index + "a"}>
                    <TableCell width='10'align='center' key={index+'i'}>{item.quantity}</TableCell>
                    <TableCell width="60" align="center" key={index + "e"}>
                      {item.name}
                    </TableCell>
                    {/*<TableCell width="20" align="center" key={index + "d"}>
                       <TextField
                        width="10"
                        size="small"
                       placeholder='1'
                        onChange={(e)=>{
                         
                          item.cantidad=(e.target.value)
                          addProduct(item.id, item.producto, item.precio*item.cantidad, item.cantidad);
                       sumar(item.precio*(item.cantidad-1))

            
                        }}
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" /* ,
                        startAdornment: (
                          <InputAdornment position="start" id='aumentar'>
                      <img
                        width="50"
                        alt=""
                        onClick={() => {
                          order.push(item);
                          sumar(item.precio);
                        }}
                        src={plus}
                      /> 
                          
                        
                          </InputAdornment>
                        ),}}/>
                      
                    </TableCell> */}
                    <TableCell width="20" align="center" key={index + "b"}>
                      <img
                        width="50"
                        alt=""
                        onClick={() => {
                          if (!order.includes(item)) {
                            order.push(item);
                            sumar(item.precio);
                            console.log(order);
                          } else {
                            item.quantity += 1;
                            sumar(item.precio);
                            console.log(order);
                          }
                        }}
                        src={plus}
                      />

                      <img
                        width="20"
                        alt=""
                        src={deleteIco}
                        onClick={() => {
                          if (item.quantity === 1) {
                            order.splice(index, 1);
                            sumar(-item.price);
                          } else {
                            item.quantity -= 1;
                            sumar(-item.price);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell width="20" align="center" key={item.id}>
                      {item.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <section id="Total">
        <h2>Total:</h2>
        <h3>$ {suma + cuenta}</h3>
      </section>
      <ButtonEnviarOrden
        cliente={cliente}
        orden={order}
        total={suma + cuenta}
        mesero={email}
      />
    </div>
  );
};

export default Comanda;
