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
  bgcolor: "background.paper",
  border: "2px solid #000",
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
    <div>
      <Button
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

              elemToSetup.tiempoTrancurrido = strTiempo;
              setTiempo(elemToSetup.tiempoTrancurrido)
              setObject(elemToSetup)
        }}
        margin="large"
        color="secondary"
        size="small"
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tiempor en cocina: {tiempo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            La notificación de orden lista sera enviada al mesero ¿Está seguro
            de continuar?
          </Typography>
          <Button
            onClick={() => {
             
              actualizar(object, item.id);
            }}
          >Enviar a piso</Button>
        </Box>
      </Modal>
    </div>
  );
}
