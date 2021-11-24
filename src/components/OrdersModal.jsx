import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";

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
};

export default function OrdersModal({ orders, item, actualizar }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tiempo, setTiempo ] = useState(null);
  const [object, setObject]= useState(null)

  return (
    window.location.pathname === '/cocina' ?
       <div>
      <Button  variant="contained"
        margin="large"
        color="secondary"
        size='small'
        onClick={() => {
          handleOpen();
          const elemToSetup = orders.find((order) => order.id === item.id);

              elemToSetup.status = "Listo";
              elemToSetup.salidaCocina = new Date().toLocaleTimeString();

              let initial = moment.duration(elemToSetup.hora);
              var end = moment.duration(elemToSetup.salidaCocina);
              let tiempoTrancurrido = moment.duration(end - initial);

              let strTiempo = `${
                tiempoTrancurrido._data.hours < 9
                  ? "0" + tiempoTrancurrido._data.hours + ":"
                  : tiempoTrancurrido._data.hours + ":"
              }${
                tiempoTrancurrido._data.minutes < 9
                  ? "0" + tiempoTrancurrido._data.minutes + ":"
                  : tiempoTrancurrido._data.minutes + ":"
              }${
                tiempoTrancurrido._data.seconds < 9
                  ? "0" + tiempoTrancurrido._data.seconds
                  : tiempoTrancurrido._data.seconds
              }`;

              elemToSetup.tiempoDePreparacion = strTiempo;
              setTiempo(elemToSetup.tiempoDePreparacion)
              setObject(elemToSetup)
        }}
       
      >
        Orden Lista
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
            Tiempo en cocina: {tiempo}
          </Typography>
          <Typography  align='center' id="modal-modal-description" sx={{ mt: 2 }}>
            La notificación de orden lista será enviada al mesero ¿Está seguro
            de continuar?


          </Typography>
          <section id='modalButtons'>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={() => {
             
              actualizar(object, item.id);
            }}
          >Enviar a piso</Button>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={handleClose}
          >Cancelar</Button></section>
        </Box>
      </Modal>
    </div> :   <div>
      <Button  variant="contained"
        margin="large"
        color="secondary"
        size='small'
        onClick={() => {
          handleOpen();
          const elemToSetup = orders.find((order) => order.id === item.id);

              elemToSetup.status = "Entregada";
             

              
              setObject(elemToSetup)
        }}
       
      >
        Orden Entregada
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
           ¿Estás seguro de que quieres archivar esta orden?
          </Typography>
          
          <section id='modalButtons'>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={() => {
             
              actualizar(object, item.id);
            }}
          >Sí</Button>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={handleClose}
          >No</Button></section>
        </Box>
      </Modal>
    </div>
  );
}
