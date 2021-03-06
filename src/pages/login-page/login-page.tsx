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
import { loginUser } from '../../redux/slices/auth-slice';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleLogIn = () => {
    dispatch(loginUser({ email, password }));
  };

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
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              id='password'
              label='Password'
              variant='outlined'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Typography variant='subtitle2' textAlign={'right'} sx={{ color: 'primary.main' }}>
              Forgot password?
            </Typography>
            <LoadingButton variant='contained' size='large' onClick={handleLogIn}>
              Login
            </LoadingButton>
            {/* <Divider>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoadingButton variant='outlined' size='large' startIcon={<GoogleIcon />}>
              Log in with Google
            </LoadingButton> */}
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
            <Typography variant='subtitle2' textAlign={'center'} sx={{ color: 'text.secondary' }}>
              Don't have an account?
            </Typography>
            <Link component={RouterLink} to='/register'>
              <Typography align='center' variant='subtitle2'>
                Sign up
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
