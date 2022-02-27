import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import HeaderTabs from '../HeaderTabs/HeaderTabs';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const tabsArray = [
  { value: 'exercises', label: 'Exercises' },
  { value: 'overview', label: 'Overview' },
];

const WorkoutHeader: React.FC = () => {
  const [value, setValue] = useState('exercises');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Perhaps do something with Typescript?
    const pathname = location.pathname.split('/');
    const isInvalidPathNames = pathname[2] !== 'exercises' && pathname[2] !== 'overview';
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
        backgroundColor: 'white',
      }}
    >
      <Grid
        container
        sx={{ flex: 1, paddingLeft: { xs: 2, md: 0 }, paddingRight: { xs: 1, md: 0 } }}
      >
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, lineHeight: 1.25, paddingTop: { xs: 1, sm: 2 } }}
          >
            Workout
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
          <IconButton sx={{ color: 'text.primary' }}>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <HeaderTabs tabs={tabsArray} />
    </Box>
  );
};

export default WorkoutHeader;
