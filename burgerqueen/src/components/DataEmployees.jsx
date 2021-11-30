import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDataEmployees } from "../hooks/useDataEmployees";
import { useDataKitchen } from "../hooks/useDataKitchen";

import ContentModal from "./Modal";
const DataEmployees = () => {
  const { dataEmployees, deleteEmployee, recoveryDataEmployee, dataEmploy } =
    useDataEmployees();
  const { open, handleClose, handleOpen } = useDataKitchen();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataEmployees.map((person, i) => (
            <tr key={i}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.rol}</td>
              <td>{person.email}</td>
              <td>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={(e) => {
                    handleOpen();
                    recoveryDataEmployee(person.id, person.name, person.uid);
                  }}
                ></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContentModal open={open} handleClose={handleClose}>
        <p>¿Estas seguro de eliminar a {dataEmploy.name}?</p>
        <button
          onClick={(e) => {
            deleteEmployee(dataEmploy.id);
            handleClose();
//            DeleteUser(e, dataEmploy.uid);
          }}
        >
          Elminar
        </button>
        <button onClick={() => handleClose()}>Cancelar</button>
      </ContentModal>
    </div>
  );
};

export default DataEmployees;
