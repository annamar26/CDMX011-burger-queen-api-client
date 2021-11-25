import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ModalReady } from "../components/Modal";
import { useDataKitchen } from "../hooks/useDataKitchen";

function Ready() {
   const {ready, open, handleOpen, handleClose, id, recoverID, updateApiReady } =useDataKitchen()
    return (
        <div className="cards-kitchen">
        {ready.map((item, i) => (
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
                  handleOpen();
                  recoverID(item.id);
                }}
              >
                Entregar orden
              </button>
            </CardContent>
          </Card>
        ))}
        <ModalReady
          key="modal"
          open={open}
          handleClose={handleClose}
          id={id}
          updateApiReady={updateApiReady}
        />*
      </div>
    )
}

export default Ready
