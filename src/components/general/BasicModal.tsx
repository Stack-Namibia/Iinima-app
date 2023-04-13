import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  children: any;
  width: number;
  height: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function BasicModal({
  open,
  handleClose,
  children,
  width,
  height,
}: BasicModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, width, height }}>{children}</Box>
      </Modal>
    </div>
  );
}
