import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { usePostProducts } from "../hooks/usePostProduct";
import { useState } from "react";

function Comanda({ order, suma, resta, deleteElement, newPricePlus, newPriceMinus }) {
  const { postProducts, clientName, clientNameFn } = usePostProducts(1);
  const [state, setstate] = useState([0,0])

  const addProd = (prod)=>{
    setstate([...state, prod]);
  }

  return (
    <div id="comanda">
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>
              <input
                id="client"
                type="text"
                onChange={(e) => clientNameFn(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th>Cant</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {order.map((product, i) => (
            <tr key={i}>
              <td>
                <span>{product.quantity}</span>
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <FontAwesomeIcon icon={faPlusCircle} onClick={() => {
                  addProd(product.quantity++);
                  newPricePlus(product.price)
                }} />
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  onClick={(e) => {
                    addProd(product.quantity--);
                    newPriceMinus(product.price)
                    if(product.quantity === 0){
                      deleteElement(i, e);
                      resta(product.price);
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${suma}</td>
          </tr>
        </tfoot>
      </table>
      <button id="send" onClick={() => postProducts(order, clientName)}>
        Enviar
      </button>
    </div>
  );
}

export default Comanda;

/*import { usePostProducts } from "../hooks/usePostProduct";
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
});*/

/* const { postProducts, clientName, clientNameFn } = usePostProducts();
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
            {order.map((producto, i) => (
              <TableRow key={i}>
                <><TableCell>{producto.name}</TableCell><TableCell>{"$" + producto.price}</TableCell><TableCell>
                <FontAwesomeIcon
                  onClick={(e) => {
                    e.preventDefault();
                    resta(suma, producto.price);
                    console.log(order)
                  } }
                  icon={faMinusCircle} />
              </TableCell><TableCell>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  <input id="add-product" type="text" />
                </TableCell></>
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
    </div>*/
