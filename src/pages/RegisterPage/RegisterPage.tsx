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
    maxHeight: { xs: 'none', sm: 675 },
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

const RegisterPage: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.registerContainer}>
        <Box sx={styles.registerContentContainer}>
          <Typography variant='h5' textAlign={'center'} sx={{ fontWeight: 500, pb: 2 }}>
            Create your account
          </Typography>
          <Typography
            variant='subtitle1'
            textAlign={'center'}
            sx={{ fontWeight: 500, color: 'text.secondary' }}
          >
            Ready to become stronger? Enter your details down below to get started.
          </Typography>
          <Stack spacing={2} sx={{ my: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField id='first-name' label='First name' variant='outlined' fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id='last-name' label='Last name' variant='outlined' fullWidth />
              </Grid>
            </Grid>
            <TextField id='email' label='Email' variant='outlined'></TextField>
            <TextField id='password' label='Password' variant='outlined'></TextField>
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              By signing up, you agree to our Terms & Conditions and Privacy Policy
            </Typography>
            <LoadingButton variant='contained'>Sign up</LoadingButton>
            <Divider>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoadingButton variant='outlined' startIcon={<GoogleIcon />}>
              Sign up with Google
            </LoadingButton>
          </Stack>
          <Typography variant='subtitle2' textAlign={'center'}>
            <Box component={'span'} sx={{ color: 'text.secondary' }}>
              Joined us before?{' '}
            </Box>
            <Box component={'span'} sx={{ color: 'primary.main' }}>
              Login
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
