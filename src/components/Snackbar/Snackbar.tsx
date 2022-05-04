import { Snackbar, Alert, Typography } from '@mui/material';

const styles = {
  snackbar: {
    minWidth: 350,
    userSelect: 'none',
  },
  alert: {
    textAlign: 'center',
    width: '100%',
    '& .MuiAlert-icon': {
      marginRight: 'auto',
    },
  },
  alertText: {
    textTransform: 'UPPERCASE',
  },
};

interface Props {
  open: boolean;
  onClose: () => void;
  snackbarType?: 'success' | 'warning' | 'info' | 'error';
}

const CustomizedSnackbar: React.FC<Props> = ({ open, onClose, snackbarType, children }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={2000}
      sx={styles.snackbar}
    >
      <Alert
        onClose={onClose}
        severity={!snackbarType ? 'info' : snackbarType}
        sx={styles.alert}
        variant='filled'
      >
        <Typography variant='subtitle2' sx={styles.alertText}>
          {children}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbar;
