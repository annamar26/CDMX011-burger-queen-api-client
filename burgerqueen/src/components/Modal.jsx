import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalKitchen({open, handleClose, updateApiKitchen, timeInK, id}) {
  return (
    <div>
      <Modal
      key='modal'
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tiempo en cocina {timeInK} minutos.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          La notificación de orden lista será enviada al mesero ¿Está seguro
            de continuar?
          </Typography>
          <button onClick={(e)=>{
              e.preventDefault();
              handleClose();
              updateApiKitchen(id);
          }}>Enviar</button>
          <button onClick={(e)=>{
              e.preventDefault();
              handleClose();
          }}>Cancelar</button>
        </Box>
      </Modal>
    </div>
    
  );
}

 function ModalReady({open, handleClose, id, updateApiReady}) {
  return (
    <div>
      <Modal
      key='modal'
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Entregar orden
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           ¿Está seguro de continuar?
          </Typography>
          <button onClick={(e)=>{
              e.preventDefault();
              updateApiReady(id);
              handleClose();
          }}>Enviar</button>
          <button onClick={(e)=>{
              e.preventDefault();
              handleClose();
          }}>Cancelar</button>
        </Box>
      </Modal>
    </div>
    
  );
}

export {
  ModalKitchen,
  ModalReady,
};