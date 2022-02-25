import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Stack, Typography, Button, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const SideTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: '1px solid #e8e8e8',
  [theme.breakpoints.up('md')]: {
    borderBottom: 'none',
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const SideTab = styled(
  (props: { label: string; value: string; icon: any; iconPosition: IconPosition }) => (
    <Tab {...props} />
  )
)(({ theme }) => ({
  minHeight: '50px',
  fontSize: 18,
  borderRadius: '8px',
  marginBottom: '8px',
  textTransform: 'none',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
  fontWeight: 600,
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: '#e8e8e8',
    opacity: 0.5,
  },
  '&.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor: '#e8e8e8',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

type PageValues = 'home' | 'workout' | 'profile';
type PageTabValues = 'stats' | 'exercises' | 'feed';
type IconPosition = 'top' | 'start' | 'end' | 'bottom';

const SideNavigation: React.FC = () => {
  const [value, setValue] = useState('workout');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // Perhaps do something with Typescript?
    const pathname = location.pathname.split('/');
    setValue(pathname[1]);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: PageValues) => {
    let subRoute: PageTabValues;
    if (newValue === 'workout') subRoute = 'exercises';
    else if (newValue === 'home') subRoute = 'stats';
    else subRoute = 'feed';
    setValue(newValue);
    navigate(`${newValue}/${subRoute}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 4,
        marginLeft: 4,
        marginTop: { xs: '125px', md: '150px' },
      }}
    >
      <Box
        sx={{
          paddingLeft: 1,
          paddingRight: 1,
          paddingBottom: 2,
          paddingTop: 2,
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
          marginBottom: 3,
          maxWidth: 275,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: '600', paddingLeft: 2.5, marginBottom: 2 }}>
          Navigation
        </Typography>

        <Stack spacing={5} sx={{ paddingTop: 0 }}>
          <SideTabs
            value={value}
            onChange={handleChange}
            centered
            variant='fullWidth'
            orientation='vertical'
          >
            <SideTab
              label='Home'
              value='home'
              icon={<DonutSmallOutlinedIcon />}
              iconPosition='start'
            />
            <SideTab
              label='Workout'
              value='workout'
              icon={<WhatshotOutlinedIcon />}
              iconPosition='start'
            />
            <SideTab
              label='Profile'
              value='profile'
              icon={<AccountCircleOutlinedIcon />}
              iconPosition='start'
            />
          </SideTabs>
        </Stack>
      </Box>
      <Button variant='contained' fullWidth sx={{ fontSize: 16, borderRadius: 2, maxWidth: 275 }}>
        New workout
      </Button>
    </Box>
  );
};

export default SideNavigation;
