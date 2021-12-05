import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import { useShowHooks } from "../hooks/useShowHooks";
import FormAddProducts from "./FormAddProducts";
import ContentModal from "./Modal";

function DataProducts() {
  const { desayunos, comidas, recoverDataProduct, recoveredDataProduct, deleteProduct } = useProducts();
  const {
    open,
    handleOpen,
    handleClose,
    conditionalRenderTrue,
    conditionalRenderFalse,
    conditionalButtonModal,
  } = useShowHooks();
  return (
    <div>
     <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {desayunos.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.type}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} onClick={()=>{
                    conditionalRenderTrue();
                    recoverDataProduct(item.id, item.name);
                    handleOpen();
                }}></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon icon={faTrashAlt} onClick={()=>{
                    conditionalRenderFalse();
                    recoverDataProduct(item.id, item.name);
                    handleOpen();
                }}></FontAwesomeIcon>
              </td>
            </tr>
          ))}
          {comidas.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.type}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} onClick={()=>{
                    conditionalRenderTrue();
                    recoverDataProduct(item.id, item.name);
                    handleOpen();
                }}></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon icon={faTrashAlt} onClick={()=>{
                    conditionalRenderFalse();
                    recoverDataProduct(item.id, item.name);
                    handleOpen();
                }}></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {conditionalButtonModal ? (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>Editar información de {recoveredDataProduct.name}</h1>
          <FormAddProducts/>
        </ContentModal>
      ) : (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>¿Estas seguro de eliminar "{recoveredDataProduct.name}" </h1>
          <button
            onClick={(e) => {
              deleteProduct(recoveredDataProduct.id);
              handleClose();
            }}
          >
            Elminar
          </button>
        </ContentModal>
      )}
    </div>
  );
}

export default DataProducts;
