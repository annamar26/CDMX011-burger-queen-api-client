import React, { Fragment, useState } from "react";
import useSetOpenModal from "../../hooks/useSetOpenModal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { red, green } from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigth: 600,
  bgcolor: "background.paper",
  border: "2px solid #800080",
  borderRadius: '1.5vw',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center'
};
function ButtonSendOrder({ client, order, total, waiter, orderToKitchen, table }) {
const {handleOpen, open, handleClose}= useSetOpenModal()
const [content, setContent]= useState("")

  return (
    <Fragment>
      <Button
        onClick={() => {
          handleOpen()
        if (order.length === 0 ) {
           setContent('Tu orden no puede estar vacía')
          } else if(((client === ""|| client=== undefined) && table>0)||(table<0 && client.length)){
            setContent('Orden enviada a cocina')
            orderToKitchen(order, client, total, waiter);
            
          } else{
           setContent('Debes ingresar nombre del cliente o número de mesa para continuar con la orden')
            
          }
           
          
        }}
        variant="contained"
        margin="large"
        color="secondary"
        size="sma=ll"
        id="enviarOrden"
      >
        Ordenar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       {content === "Orden enviada a cocina"? <CheckCircleIcon alignItems='center' fontSize='large' sx={{ color: green[500]}}/>: <ErrorOutlineRoundedIcon alignItems='center' fontSize='large' sx={{ color: red[500]}}/>}
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {content}
          </Typography>
          <section id="modalButtons">
            <Button
              align="center"
              variant="contained"
              margin="large"
              color="secondary"
              size="small"
              onClick={handleClose}
            >
              OK
            </Button>
          </section>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default ButtonSendOrder;
