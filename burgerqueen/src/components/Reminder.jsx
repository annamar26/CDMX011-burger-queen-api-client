import { faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useDataKitchen } from "../hooks/useDataKitchen";
import { useShowHooks } from "../hooks/useShowHooks";
import Banner from "./Banner";
import ContentModal from "./Modal";
import camarera from "../images/camarera.png";
import LoginJSON from "../api/LoginJSON";

const cookies = new Cookies();

function Reminder() {
  const { removeCookies } = LoginJSON();
  const { open, handleOpen, handleClose } = useShowHooks();
  const { ready } = useDataKitchen();
  let userLoggged = [];
  const cook = cookies.get("name");
  for (const [key, value] of Object.entries(cook)) {
    userLoggged.push(value);
  }
  return (
    <>
      <Banner>
        <section id="reminder"></section>
        <p>
          {userLoggged[0]}
          <img src={camarera} alt="Error al cargar imagen" />
        </p>

        <section id="action-btns">
          <div>
            <span id="count">{ready.length}</span>
            <FontAwesomeIcon
              id="fa-bell"
              icon={faBell}
              size="lg"
              style={{ color: "#F88D55" }}
              onClick={() => {
                  handleOpen();
              }}
            ></FontAwesomeIcon>
          </div>
          <div>
          <span onClick={() => removeCookies()}>Salir</span>
          <FontAwesomeIcon
            id="fa-sign-out"
            icon={faSignOutAlt}
            size="lg"
            onClick={() => removeCookies()}
          ></FontAwesomeIcon>
          </div>
        </section>
      </Banner>

      <ContentModal open={open} handleClose={handleClose}>
        <span>Órdenes terminadas</span>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.Orden</TableCell>
                <TableCell>Cliente</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ready.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.client}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button
          onClick={() => {
            window.location.href = "./ready";
          }}
        >
          Ir a ordenes
        </button>
      </ContentModal>
    </>
  );
}

export default Reminder;
