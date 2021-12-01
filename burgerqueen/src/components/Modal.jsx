import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function ContentModal({ open, handleClose, children }) {
  return (
    <Modal
      key="modal"
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box className="modal-container" sx={style}>
          <section id="close-modal">
            <span>
              <FontAwesomeIcon
                onClick={() => handleClose()}
                icon={faTimes}
              ></FontAwesomeIcon>
            </span>
          </section>
          {children}
        </Box>
      </>
    </Modal>
  );
}

export default ContentModal;
