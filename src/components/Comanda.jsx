import React from "react";
import useSetComanda from "../hooks/useSetComanda";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import plus from "../images/plus.png";
import deleteIco from "../images/deleteIco.png";
import { TextField } from "@mui/material";
import ButtonEnviarOrden from "./ButtonEnviarOrden";
import { getUser } from "../lib/FirebaseAut";

const Comanda = ({ order, cuenta }) => {
  const { suma, sumar, obtenerNombre, cliente } = useSetComanda()


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
                  <TableCell width="60" align="center">
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
                    <TableCell width="60" align="center" key={index + 'e'}>
                      {item.producto}
                    </TableCell>
                    <TableCell width="20" align="center" key={index + 'b'}>
                      <img
                        width="50"
                        alt=""
                        onClick={() => {
                          order.push(item);
                          sumar(item.precio);
                        }}
                        src={plus}
                      />
                    
                      <img
                        width="20"
                        alt=""
                        src={deleteIco}
                        onClick={() => {
                          order.splice(index, 1);
                          sumar(-item.precio);
                        }}
                      />
                    </TableCell>
                    <TableCell width="20" align="center" key={item.id}>
                      {"$" + item.precio}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <section id="Total">
        <h2>Total</h2>
        <h3>$ {cuenta +suma }</h3>
      </section>
      <ButtonEnviarOrden
        cliente={cliente}
        orden={order}
        total={cuenta + suma}
        mesero={email}
      />
    </div>
  );
};

export default Comanda;
