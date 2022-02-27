import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProfileHeader: React.FC = () => {
  const [value, setValue] = useState('stats');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Perhaps do something with Typescript?
    const pathname = location.pathname.split('/');
    const isInvalidPathNames = pathname[2] !== 'stats' && pathname[2] !== 'muscles';
    if (!pathname[2] || isInvalidPathNames) return;
    setValue(pathname[2]);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        height: { xs: 100, md: 125 },
        display: 'flex',
        flexDirection: 'column',
        background: {
          xs: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
          md: 'none',
        },
      }}
    >
      <Grid
        container
        sx={{ flex: 1, paddingLeft: { xs: 2, md: 0 }, paddingRight: { xs: 1, md: 0 } }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              lineHeight: 1.25,
              paddingTop: { xs: 1, sm: 2 },
              color: { xs: 'white', md: 'text.primary' },
            }}
          >
            Profile
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingTop: { xs: 0, sm: 1 },
          }}
        >
          <IconButton>
            <MoreVertIcon sx={{ color: { xs: 'white', md: 'text.primary' } }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileHeader;
