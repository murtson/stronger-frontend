import React from 'react';
import { Box, Typography, Avatar, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';

const ProfileInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { md: 325 },
        marginTop: { xs: 'none', md: 3 },
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          flex: 1,
          background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
          borderRadius: '8px 8px 0 0',
        }}
      ></Box>
      <Grid
        container
        sx={{
          position: 'relative',
          padding: { xs: 2, md: 4 },
          borderTop: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
          borderRight: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
          borderLeft: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
          borderBottom: { xs: `1px solid ${theme.palette.divider}` },
          backgroundColor: 'white',

          borderRadius: { xs: 0, md: '0 0 8px 8px' },
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
          <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
            username@mail.com
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button variant='contained' sx={{ flex: 0, borderRadius: 2, minWidth: { md: '200px' } }}>
            Edit your profile
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='subtitle2'
            sx={{ color: 'text.secondary', marginTop: { xs: 4, md: 6 } }}
          >
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
