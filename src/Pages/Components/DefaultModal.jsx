import Box from "@mui/material/Box";
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
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'

};

export default function DefaultModal({ open, handleClose, children}) {
    
    return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {children}
          
          
        </Box>
      </Modal>
    </div>
  );
}
