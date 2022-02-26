import React from 'react';
import { Box, Typography, Avatar, Button, Grid, Stack } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const ProfileInfo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { md: 325 },
        marginTop: { xs: 'none', md: 3 },
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          flex: 1,
          backgroundColor: 'neutral.main',
        }}
      ></Box>
      <Grid
        container
        sx={{
          position: 'relative',
          padding: { xs: 2, md: 4 },
          borderTop: { xs: '1px solid #b4bed7', md: 'none' },
          borderBottom: { xs: '1px solid #e8e8e8', md: 'none' },
          backgroundColor: 'white',
          boxShadow: { xs: 'none', md: '0 2px 1px 0 rgb(0 0 0 / 10%)' },
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'neutral.main',
            color: 'neutral.dark',
            position: 'absolute',
            transform: 'translateY(-50%)',
            top: 0,
            height: { xs: 75, md: 110 },
            width: { xs: 75, md: 110 },
            border: { xs: '4px solid white', md: '4px solid white' },
          }}
        >
          <FaceIcon sx={{ fontSize: { xs: '48px', md: '64px' } }} />
        </Avatar>
        <Grid item xs={6} sx={{ paddingTop: '36px' }}>
          <Typography variant='h5' sx={{ fontWeight: 500 }}>
            Username
          </Typography>
          <Typography variant='subtitle1' sx={{ fontWeight: 500, color: 'text.secondary' }}>
            username@mail.com
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button variant='contained' sx={{ flex: 0, borderRadius: 2 }}>
            <Typography variant='subtitle2'>Edit your profile</Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 500, color: 'text.secondary', marginTop: { xs: 4, md: 6 } }}
          >
            <Box component='span'>Workouts: </Box>
            <Box component='span' sx={{ color: 'text.primary', marginRight: 3 }}>
              12
            </Box>
            <Box component='span'>Joined: </Box>
            <Box component='span' sx={{ color: 'text.primary' }}>
              3 months ago
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileInfo;
