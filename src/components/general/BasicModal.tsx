import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  children: any;
  width: number;
}

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  margin: 1,
};

export default function BasicModal({
  open,
  handleClose,
  children,
  width,
}: BasicModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          display: "flex",
          justifyContent: "center",
          "@media (max-width: 600px)": {
            "& .MuiPaper-root": {
              width: "100%",
              margin: 1,
            },
          },
          margin: 1,
        }}
      >
        <Box sx={{ ...style, width }}>{children}</Box>
      </Modal>
    </div>
  );
}
