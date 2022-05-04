// general
import React from 'react';

// mui & components
import { Box, Typography, TextField, Stack, Grid, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import GoogleIcon from '@mui/icons-material/Google';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    height: '100%',
    width: '100%',
    maxWidth: { xs: 'none', sm: 550 },
    maxHeight: { xs: 'none', sm: 575 },
    boxShadow: { xs: 0, sm: 1 },
    borderRadius: 2,
    bgcolor: '#ffffff',
    display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',
  },
  registerContentContainer: {
    px: { xs: 2, sm: 4 },
    py: { xs: 2, sm: 4 },
  },
};

const LoginPage: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.registerContainer}>
        <Box sx={styles.registerContentContainer}>
          <Typography variant='h5' textAlign={'center'} sx={{ fontWeight: 500, pb: 2 }}>
            Log in
          </Typography>
          <Typography
            variant='subtitle1'
            textAlign={'center'}
            sx={{ fontWeight: 500, color: 'text.secondary' }}
          >
            Welcome back! Enter your credentials to access your account.
          </Typography>
          <Stack spacing={2} sx={{ my: 4 }}>
            <TextField id='email' label='Email' variant='outlined'></TextField>
            <TextField id='password' label='Password' variant='outlined'></TextField>
            <Typography variant='subtitle2' textAlign={'right'} sx={{ color: 'primary.main' }}>
              Forgot password?
            </Typography>
            <LoadingButton variant='contained'>Login</LoadingButton>
            <Divider>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoadingButton variant='outlined' startIcon={<GoogleIcon />}>
              Log in with Google
            </LoadingButton>
          </Stack>
          <Typography variant='subtitle2' textAlign={'center'}>
            <Box component={'span'} sx={{ color: 'text.secondary' }}>
              Don't have an account?{' '}
            </Box>
            <Box component={'span'} sx={{ color: 'primary.main' }}>
              Sign up
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
