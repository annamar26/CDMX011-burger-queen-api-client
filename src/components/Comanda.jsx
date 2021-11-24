import React from "react";
import useSetComanda from "../hooks/useSetComanda";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,Button
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import ButtonEnviarOrden from "./ButtonSendOrder";
import { getUser } from "../lib/FirebaseAut";
import { RemoveCircleOutlineTwoTone } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { pink } from "@mui/material/colors";


const Comanda = ({ order, cuenta }) => {
  const { suma, sumar, obtenerNombre, cliente, setOrder } = useSetComanda();

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
            <Table id='comandaTable' width='10'  aria-label='a dense table'>
              <TableHead id='table-header' fontSize='large' height='50'color="primary">
                <TableRow fontSize='large'>
                  <TableCell width="5" align="center">
                    #
                  </TableCell>
                  <TableCell width="45" align="center">
                    Produto
                  </TableCell>
                  <TableCell width="40" align="center">
                    /
                  </TableCell>
                  <TableCell width="5" align="center">
                    Precio unitario
                  </TableCell>
                  <TableCell width="5" align="center">
                    Subtotal
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((item, index) => (
                  <TableRow key={index + "a"}>
                    <TableCell width="5" align="center" key={index + "i"}>
                      {item.quantity}
                    </TableCell>
                    <TableCell width="45" align="center" key={index + "e"}>
                      {item.name}
                    </TableCell>
                    <TableCell width="40" align="center" key={index + "b"}>
                     
                    <RemoveCircleOutlineTwoTone fontSize='large' sx={{ color: pink[500]}} onClick={() => {
                            if (item.quantity === 1) {
                              order.splice(index, 1);
                              setOrder(order)
                              sumar(-item.price);
                            } else {
                              item.quantity -= 1;
                              setOrder([...order, {...item, quantity: item.quantity}])
                              sumar(-item.price);
                            }
                          }} />
                    <AddCircleOutlineIcon fontSize='large' color='success' onClick={() => {
                            if (!order.includes(item)) {
                              order.push(item);
                              sumar(item.price);
                              console.log(order);
                              setOrder(order)
                            } else {
                              item.quantity += 1;
                              sumar(item.price);
                              setOrder([...order, {...item, quantity: item.quantity}])
                              console.log(order);
                            }
                          }}/>
                      
                    </TableCell>
                    <TableCell width="5" align="center" key={item.id + 1}>
                      $ {item.price}
                    </TableCell>
                    <TableCell width="5" align="center" key={item.id}>
                      $ {item.price * item.quantity}
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
        <h3 id='totalPrint'>$ {suma + cuenta}</h3>
      </section>
      <ButtonEnviarOrden
        cliente={cliente}
        orden={order}
        total={suma + cuenta}
        mesero={email}
        
      />
      <Button id='cancelar' onClick={()=>{window.location.reload()
      }}>Cancelar</Button>
    </div>
  );
};

export default Comanda;
