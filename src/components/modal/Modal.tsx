import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  modalTitle: string;
  modalContent: React.ReactNode;
  color?: string;
  onHandleClose: () => void;
}

const Modal = ({ isOpen, onHandleClose, modalTitle, color, modalContent }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onHandleClose}>
      <DialogTitle align="center" color={color}>
        {modalTitle}
      </DialogTitle>
      <DialogContent dividers>{modalContent}</DialogContent>
      <DialogActions>
        <Button onClick={onHandleClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
