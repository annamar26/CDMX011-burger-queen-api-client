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

export default function EmployeeModal({ array, item, updateItem, deleteItem}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState(null);
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
          setContent('Los datos del empleado serán modificados, ¿Estás seguro de continuar?')
          setObject(item)
         
        }}
      >
        Editar
      </Button>
      <Button
        variant="contained"
        margin="large"
        color="secondary"
        size="small"
        onClick={() => {
          handleOpen();
          setContent('El empleado será eliminado, ¿Estás seguro de continuar?')
         
        }}
      >
        Borrar
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
              onClick={() => {
                if(content === 'Los datos del empleado serán modificados, ¿Estás seguro de continuar?'){
                updateItem(object, item.id);}
                else{
                  deleteItem(object, item.id);}
                
              }}
            >
              Aceptar
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
}
