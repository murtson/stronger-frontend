import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HistoryIcon from '@mui/icons-material/History';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DateRangeIcon from '@mui/icons-material/DateRange';

const AntTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: '1px solid #e8e8e8',
  [theme.breakpoints.up('md')]: {
    borderBottom: 'none',
  },

  '& .MuiTabs-indicator': {
    backgroundColor: 'primary.main',
    height: 2,
  },
}));

const AntTab = styled((props: { label: string; value: string }) => <Tab {...props} />)(
  ({ theme }) => ({
    fontSize: 18,
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    fontWeight: 600,
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      // color: theme.palette.text.primary,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  })
);

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
        height: { xs: 105, md: 125 },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Grid container sx={{ flex: 1 }}>
        <Grid
          item
          xs={6}
          sx={{
            paddingLeft: 2,
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, lineHeight: 1.25, paddingTop: { xs: 2, sm: 2 } }}
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
            paddingTop: { xs: 1 },
            paddingRight: 1,
          }}
        >
          <IconButton sx={{ color: 'text.primary', backgroundColor: '#eeeeee', marginLeft: 1 }}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.primary', backgroundColor: '#eeeeee', marginLeft: 1 }}>
            <HistoryIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.primary', backgroundColor: '#eeeeee', marginLeft: 1 }}>
            <DateRangeIcon />
          </IconButton>
        </Grid>
      </Grid>
      <AntTabs value={value} onChange={handleChange} centered variant='fullWidth'>
        <AntTab label='Exercises' value='exercises' />
        <AntTab label='Overview' value='overview' />
      </AntTabs>
    </Box>
  );
};

export default WorkoutHeader;
