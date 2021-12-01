import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { usePostProducts } from "../hooks/usePostProduct";
import { Fragment } from "react";
import ContentModal from "./Modal";
import { useShowHooks } from "../hooks/useShowHooks";

function Comanda({ order, total, minusButton, deleteRow, plusButton }) {
  const { postProducts, clientName, clientNameFn } = usePostProducts(1);
  const { open, handleOpen, handleClose } = useShowHooks();

  return (
    <Fragment>
      <section id="client">
        Cliente
        <input
          type="text"
          onChange={(e) => {
            clientNameFn(e.target.value);
          }}
        />
      </section>
      <table>
        <thead>
          <tr>
            <th>Cant</th>
            <th>Producto</th>
            <th>Acciones</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.map((product, i) => (
            <tr key={i}>
              <td>
                <span>{product.quantity}</span>
              </td>
              <td>{product.name}</td>
              <td>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  onClick={() => {
                    product.quantity++;
                    plusButton(product.price, product.quantity);
                  }}
                />
                <br />
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  onClick={(e) => {
                    product.quantity--;
                    minusButton(product.price, product.quantity);
                    if (product.quantity === 0) {
                      deleteRow(i, e);
                      minusButton(product.price, product.quantity);
                    }
                  }}
                />
              </td>
              <td>${product.price}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section id="total">
        <span>Total ${total}</span>
      </section>
      <button
        id="send"
        onClick={() => {
          if (clientName === "" || total === 0) {
            handleOpen();
          } else {
            postProducts(order, clientName, );
            window.location.reload();
          }
        }}
      >
        Enviar
      </button>
      <ContentModal open={open} handleClose={handleClose}>
        <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
        <p>Agrega nombre del cliente o producto</p>
      </ContentModal>
    </Fragment>
  );
}

export default Comanda;
