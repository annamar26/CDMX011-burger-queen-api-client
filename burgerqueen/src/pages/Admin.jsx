import { Fragment } from "react";
import DataEmployees from "../components/DataEmployees";
import { FormAdmin } from "../components/Form";
import ContentModal from "../components/Modal";
import { useDataKitchen } from "../hooks/useDataKitchen";

function Admin() {
  const {
    open,
    handleOpen,
    handleClose,
    showEmployees,
    handleShowEmployees,
    handleHideEmployees,
  } = useDataKitchen();

  return (
    <Fragment>
      <section id="nav-admin-menu">
        <button onClick={() => handleOpen()}>Registro</button>
        {!showEmployees ? (
          <button onClick={() => handleShowEmployees()}>
            Lista de empleados
          </button>
        ) : (
          <button onClick={() => handleHideEmployees()}>Otro</button>
        )}

        <button>Productos</button>
      </section>

      <div className="admin-container">
        {open ? (
          <ContentModal open={open} handleClose={handleClose}>
            <FormAdmin />
          </ContentModal>
        ) : (
          ""
        )}

        {showEmployees ? <DataEmployees /> : ""}
      </div>
    </Fragment>
  );
}

export default Admin;

/*{!open ? (
          <button onClick={() => handleOpen()}>Registro</button>
        ) : (
          <button onClick={() => handleClose()}>Registro</button>
        )} <button>Lista de empleados</button>*/
