import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDataKitchen } from "../hooks/useDataKitchen";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ContentModal from "../components/Modal";
import LoginJSON from "../api/LoginJSON";
import { useEffect } from "react";

function Kitchen() {
  const { getCookies, removeCookies } = LoginJSON();
  const {
    dataKitchen,
    updateApiKitchen,
    timeInKitchen,
    timeInMinutes,
    open,
    handleOpen,
    handleClose,
    recoverID,
    id,
  } = useDataKitchen();


  useEffect(() => {
    getCookies();
  }, []);
  
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
                    <TableRow>
                      <TableCell>{elem.name}</TableCell>
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
              }}
            >
              Orden terminada
            </button>
          </CardContent>
        </Card>
      ))}
      <ContentModal key="modalKitchen" open={open} handleClose={handleClose}>
        <h1>Tiempo en cocina {timeInMinutes} minutos</h1>
        <p>¿Enviar orden {id} a mesero?</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            updateApiKitchen(id);
          }}
        >
          Enviar
        </button>
      </ContentModal>
      <button
        onClick={() => {
          removeCookies();
        }}
      >
        Salir
      </button>
    </div>
  );
}

export default Kitchen;
