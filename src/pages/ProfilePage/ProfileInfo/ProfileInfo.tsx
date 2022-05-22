import React from 'react';
import { Box, Typography, Avatar, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: { xs: 0, md: 2 },
    overflow: 'hidden',
    boxShadow: { xs: 0, md: 1 },
    height: { xs: 275, md: 350, lg: 415 },
  },
  header: {
    flex: 1,
    background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
  },
  gridContainer: {
    flex: 1.75,
    position: 'relative',
    padding: { xs: 2, md: 3 },
    backgroundColor: '#ffffff',
    borderRadius: { xs: 0, md: '0 0 8px 8px' },
  },
  avatar: {
    bgcolor: 'neutral.main',
    color: 'neutral.dark',
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: 0,
    height: { xs: 75, md: 120 },
    width: { xs: 75, md: 120 },
    border: '4px solid #ffffff',
  },
};

const ProfileInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header} />
      <Grid
        container
        sx={{
          ...styles.gridContainer,
          borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
        }}
      >
        <Avatar sx={styles.avatar}>
          <FaceIcon sx={{ fontSize: { xs: '48px', md: '64px' } }} />
        </Avatar>
        <Grid item xs={6} sx={{ pt: { xs: 4, lg: 6 } }}>
          <Typography variant='h6' sx={{ fontWeight: 500 }}>
            Username
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
            username@mail.com
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button
            variant='contained'
            size='small'
            sx={{ flex: 0, borderRadius: 20, px: 2, minWidth: { md: '200px' } }}
          >
            Edit your profile
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
            <Box component='span'>Workouts: </Box>
            <Box component='span' sx={{ color: 'text.primary', fontWeight: 500, marginRight: 3 }}>
              12
            </Box>
            <Box component='span'>Joined: </Box>
            <Box component='span' sx={{ color: 'text.primary', fontWeight: 500 }}>
              3 months ago
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileInfo;
