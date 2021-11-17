import { usePostProducts } from "../hooks/usePostProduct";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const styles = makeStyles({
  tableFull: {
    border: "2px solid #FA81AA ",
    width: 500,
  },
  tableHeader: {
    background: "#F2DDF5",
  },
  tableCell: {
    height: 50,
  },
});

function Comanda({ order, suma, resta }) {
  const { postProducts, clientName, clientNameFn } = usePostProducts();
  const classes = styles();
  return (
    <div id="comanda">
      <TableContainer>
        <Table className={classes.tableFull}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>
                <input
                  id="client"
                  type="text"
                  onChange={(e) => clientNameFn(e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Eliminar</TableCell>
              <TableCell>Añadir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.name}</TableCell>
                <TableCell>{"$" + producto.price}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    onClick={(e)=>{
                      e.preventDefault()
                      resta(suma, producto.price)}}
                    icon={faMinusCircle}
                  />
                </TableCell>
                <TableCell>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  <input id="add-product" type="text" />
                </TableCell>
              </TableRow>
            ))}
            <TableRow className={classes.tableCell}>
              <TableCell>Total</TableCell>
              <TableCell>{"$" + suma}</TableCell>
              <TableCell>
                <button
                  id="send"
                  onClick={() => postProducts(order, clientName)}
                >
                  Enviar
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Comanda;

/*  <div id="comanda">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {content.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td>
              <td>{" $" + producto.price}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{"$" + cuenta}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={()=>postProducts(content)}>Click</button>
    </div>*/
