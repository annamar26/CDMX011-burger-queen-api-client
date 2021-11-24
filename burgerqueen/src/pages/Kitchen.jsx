import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDataKitchen } from "../hooks/useDataKitchen";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BasicModal from "../components/Modal";
import { useState } from "react";

function Kitchen() {
 
  const {
    dataKitchen,
    updateApi,
    timeInKitchen,
    timeInK,
    open,
    handleOpen,
    handleClose,
    recoverID, 
    id
  } = useDataKitchen();
  return (
    <div className="cards-kitchen">
      {dataKitchen.map((item, i) => (
        <Card key={i} sx={{ width: 370, margin: 2 }}>
          <CardContent>
            <span>{item.id}</span>
            <h1 align="center">Cliente: {item.client}</h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell>Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                {item.products.map((elem, j) => (
                  <TableBody key={j}>
                    <TableRow key={j}>
                      <TableCell>{elem.name} </TableCell>
                      <TableCell align="center">{elem.quantity}</TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
            <p>Entrada: {item.entry}</p>
            <p>Salida: {item.exit}</p>

            <button
              id="kitchen-btn"
              onClick={(e) => {
                e.preventDefault();
                timeInKitchen(item.exit, item.entry);
                handleOpen();
                recoverID(item.id);
                //updateApi(item.id, item.exit);
                // console.log(timeInK);
              }}
            >
              Orden terminada
            </button>
          </CardContent>
        </Card>
      ))}
      <BasicModal
        key="modal"
        open={open}
        handleClose={handleClose}
        updateApi={updateApi}
        timeInK={timeInK}
        id={id}
      />
    </div>
  );
}

export default Kitchen;
