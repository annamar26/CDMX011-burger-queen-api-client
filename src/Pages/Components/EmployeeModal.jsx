import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigth: 600,
  bgcolor: "background.paper",
  border: "2px solid #800080",
  borderRadius: "1.5vw",
  boxShadow: 24,
  p: 4,
};

export const EmployeeModal = (array, action, item, updateItem) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [object, setObject] = useState(null);
  return (
    <div>
      <Button
        variant="contained"
        margin="large"
        color="secondary"
        size="small"
        onClick={() => {
          handleOpen();
          /* const elemToSetup = array.find((order) => order.id === item.id); */
          /* 
              elemToSetup.active = "Listo";
              elemToSetup.outOfKitchen = new Date().toLocaleTimeString();

              let initial = moment.duration(elemToSetup.hour);
              var end = moment.duration(elemToSetup.outOfKitchen);
              let lapseTime = moment.duration(end - initial);

              let strTiempo = `${
                lapseTime._data.hours < 9
                  ? "0" + lapseTime._data.hours + ":"
                  : lapseTime._data.hours + ":"
              }${
                lapseTime._data.minutes < 9
                  ? "0" + lapseTime._data.minutes + ":"
                  : lapseTime._data.minutes + ":"
              }${
                lapseTime._data.seconds < 9
                  ? "0" + lapseTime._data.seconds
                  : lapseTime._data.seconds
              }`;

              elemToSetup.cookingTime = strTiempo;
              setTiempo(elemToSetup.cookingTime)
              setObject(elemToSetup) */
        }}
      >
       {action}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            ¿Estas seguro de querer {action} este empleado?
          </Typography>
          <section id="modalButtons">
            <Button
              align="center"
              variant="contained"
              margin="large"
              color="secondary"
              size="small"
              onClick={() => {
                updateItem(object, item.id);
              }}
            >
              {action}
            </Button>
            <Button
              align="center"
              variant="contained"
              margin="large"
              color="secondary"
              size="small"
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
};
