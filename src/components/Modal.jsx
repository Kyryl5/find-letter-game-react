import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  color: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  openModal,
  setOpenModal,
  modalMessage,
  SetReloadGame,
}) {
  function handleClose() {
    setOpenModal(false);
    SetReloadGame((prev) => !prev);
  }

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            variant="h4"
            sx={{ mt: 3, mb: 4 }}
          >
            {modalMessage}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ backgroundColor: "grey" }}
          >
            Restart game
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
