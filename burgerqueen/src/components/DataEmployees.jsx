import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDataEmployees } from "../hooks/useDataEmployees";
import { useShowHooks } from "../hooks/useShowHooks";
import { FormEdit } from "./FormEdit";
import { FormAdmin } from "./FormLogin";

import ContentModal from "./Modal";
const DataEmployees = () => {
  const { dataUsers, deleteUser, recoveryDataUser, recoveredData } =
    useDataEmployees();
  const {
    open,
    handleClose,
    handleOpen,
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
            <th>Puesto</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>
                {item.name.firstName}
                <br />
                {item.name.lastName}
              </td>
              {item.role.admin ? <td>Administrador</td> : null}
              {item.role.kitchen ? <td>Cocinero</td> : null}
              {item.role.waiter ? <td>Mesero</td> : null}
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => {
                    conditionalRenderTrue();
                    recoveryDataUser(item.id, item.name.firstName, item.name.lastName, item.email, item.password);
                    handleOpen();
                  }}
                  icon={faEdit}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={(e) => {
                    conditionalRenderFalse();
                    recoveryDataUser(item.id, item.name.firstName, item.name.lastName, item.email, item.password);
                    handleOpen();
                  }}
                ></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {conditionalButtonModal ? (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>Editar información de empleado</h1>
          <FormEdit recoveredData={recoveredData} handleClose={handleClose}/>
        </ContentModal>
      ) : (
        <ContentModal open={open} handleClose={handleClose}>
          <p>¿Estas seguro de eliminar a {recoveredData.firstName}?</p>
          <button
            onClick={(e) => {
              deleteUser(recoveredData.id);
              handleClose();
            }}
          >
            Elminar
          </button>
        </ContentModal>
      )}
    </div>
  );
};

export default DataEmployees;