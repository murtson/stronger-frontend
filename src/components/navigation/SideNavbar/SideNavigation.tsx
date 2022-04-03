import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Stack, Typography, Button, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const SideTabs = styled(Tabs)(({ theme }) => ({
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
  minHeight: '42px',

  marginLeft: '8px',
  marginRight: '8px',
  marginBottom: '16px',
  borderRadius: '8px',
  textTransform: 'none',
  justifyContent: 'flex-start',

  fontWeight: 600,
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: theme.palette.neutral.main,
    opacity: 0.5,
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.neutral.main,
  },
}));

type PageValues = 'home' | 'workout' | 'profile';
type PageTabValues = '/stats' | '/exercises' | '';
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
    if (newValue === 'workout') subRoute = '/exercises';
    else if (newValue === 'home') subRoute = '/stats';
    else subRoute = '';
    setValue(newValue);
    navigate(`${newValue}${subRoute}`);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    navigate('/log/category');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginRight: 4,
        marginLeft: 4,
        marginTop: { xs: '125px', md: '150px' },
        height: 325,
      }}
    >
      <Box
        sx={{
          maxWidth: 275,
          width: '100%',
          backgroundColor: 'white',
          paddingBottom: 2,
          paddingTop: 2,
          borderRadius: 2,
          boxSizing: 'border-box',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'divider',
          // boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
        }}
      >
        <Typography variant='h6' sx={{ paddingLeft: 2.5, marginBottom: 2 }}>
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
      <Button
        onClick={handleClick}
        variant='contained'
        fullWidth
        sx={{ borderRadius: 2, maxWidth: 275 }}
      >
        New workout
      </Button>
    </Box>
  );
};

export default SideNavigation;
