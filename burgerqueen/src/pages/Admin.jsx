import { Fragment } from "react";
import DataEmployees from "../components/DataEmployees";
import DataProducts from "../components/DataProducts";
import FormAddProducts from "../components/FormAddProducts";
import { FormRegister } from "../components/FormRegister";
import ContentModal from "../components/Modal";
import { useShowHooks } from "../hooks/useShowHooks";

function Admin() {
  const {
    open,
    handleOpen,
    handleClose,
    showEmployees,
    handleShowEmployees,
    handleHideEmployees,
    handleShowProducts,
    handleHideProducts,
    showProducts,
    conditionalButtonModal,
    conditionalRenderTrue,
    conditionalRenderFalse,
  } = useShowHooks();

  return (
    <Fragment>
      <section id="nav-admin-menu">
        <button
          onClick={() => {
            conditionalRenderTrue();
            handleOpen();
          }}
        >
          Registro de empleados
        </button>
        {!showEmployees ? (
          <button onClick={() => handleShowEmployees()}>
            Lista de empleados
          </button>
        ) : (
          <button onClick={() => handleHideEmployees()}>
            Lista de Empleados
          </button>
        )}
        <button
          onClick={() => {
            conditionalRenderFalse();
            handleOpen();
          }}
        >
          Registro de productos
        </button>
        {!showProducts ? (
          <button
            onClick={() => {
              handleShowProducts();
            }}
          >
            Lista de productos
          </button>
        ) : (
          <button onClick={handleHideProducts}>Lista de productos</button>
        )}
      </section>
      <div className="admin-container">
        {conditionalButtonModal ? (
          <ContentModal open={open} handleClose={handleClose}>
            <h1>Agregar empleado</h1>
            <FormRegister handleClose={handleClose} />
          </ContentModal>
        ) : (
          <ContentModal open={open} handleClose={handleClose}>
            <h1>Agregar producto</h1>
            <FormAddProducts />
          </ContentModal>
        )}

        {showEmployees ? <DataEmployees /> : null}
        {showProducts ? <DataProducts /> : null}
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
