import React, { useState } from 'react';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
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
    color: 'success.main',
  },
  button: {
    width: 150,
  },
};

interface Props {
  open: boolean;
  handleClose: () => void;
  handleComplete: () => void;
}

const CompleteWorkoutDialog: React.FC<Props> = ({ open, handleClose, handleComplete }) => {
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
          <CheckCircleOutlinedIcon sx={styles.icon} />
        </Box>
        <DialogTitle sx={{ textAlign: 'center' }} id='alert-dialog-title'>
          Are you done?
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={'center'} id='alert-dialog-description'>
            Completing this workout will add to your stats. You can edit this workout later.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button color='neutral' variant='contained' sx={styles.button} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color='success'
            variant='contained'
            sx={styles.button}
            onClick={handleComplete}
            autoFocus
          >
            Complete
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CompleteWorkoutDialog;
