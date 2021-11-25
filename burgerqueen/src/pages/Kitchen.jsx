import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDataKitchen } from "../hooks/useDataKitchen";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ModalKitchen } from "../components/Modal";

function Kitchen() {
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
                    <TableRow >
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
      <ModalKitchen
        key="modal"
        open={open}
        handleClose={handleClose}
        updateApiKitchen={updateApiKitchen}
        timeInK={timeInMinutes}
        id={id}
      />
    </div>
  );
}

export default Kitchen;
