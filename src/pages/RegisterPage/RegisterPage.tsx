// general
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// mui & components
import { Box, Typography, TextField, Stack, Grid, Divider, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import GoogleIcon from '@mui/icons-material/Google';
// redux
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store';
import { registerUser } from '../../redux/slices/authSlice';

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
    my: { xs: 2, sm: 4 },
  },
};

const RegisterPage: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleSignupClick = () => {
    // make api-call to backend
    dispatch(registerUser({ firstname, lastname, email, password }));
    console.log('handle me');
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.registerContainer}>
        <Box sx={styles.registerContentContainer}>
          <Typography variant='h5' textAlign={'center'} sx={{ fontWeight: 500, pb: 1.5 }}>
            Create your account
          </Typography>
          <Typography variant='subtitle1' textAlign={'center'} sx={{ fontWeight: 500, color: 'text.secondary' }}>
            Ready to become stronger? Enter your details down below to get started.
          </Typography>
          <Stack spacing={2} sx={{ my: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='first-name'
                  label='First name'
                  variant='outlined'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='last-name'
                  label='Last name'
                  variant='outlined'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id='password'
              label='Password'
              variant='outlined'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              By signing up, you agree to our Terms & Conditions and Privacy Policy
            </Typography>
            <LoadingButton variant='contained' size='large' loading={loading} onClick={handleSignupClick}>
              Sign up
            </LoadingButton>
            {/* <Divider>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoadingButton
              variant='outlined'
              size='large'
              loading={loading}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </LoadingButton> */}
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
            <Typography variant='subtitle2' textAlign={'center'} sx={{ color: 'text.secondary' }}>
              Joined us before?
            </Typography>
            <Link component={RouterLink} to='/login'>
              <Typography align='center' variant='subtitle2'>
                Log in
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
