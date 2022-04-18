import React, { useState } from 'react';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@mui/material';

const styles = {
  icon: {
    fontSize: 80,
    color: 'error.main',
  },
  button: {
    width: 150,
  },
};

interface Props {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteWorkoutDialog: React.FC<Props> = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      maxWidth={'xs'}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Box sx={{ py: 4, px: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <HighlightOffOutlinedIcon sx={styles.icon} />
        </Box>
        <DialogTitle sx={{ textAlign: 'center' }} id='alert-dialog-title'>
          Are you sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={'center'} id='alert-dialog-description'>
            Do you really want to delete this workout? This process cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button color='neutral' variant='contained' sx={styles.button} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color='error'
            variant='contained'
            sx={styles.button}
            onClick={handleDelete}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteWorkoutDialog;
