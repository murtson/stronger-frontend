// general
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// mui & components
import { Box, Typography, Button, Tabs, Tab, Divider, styled } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
// constants
import { contentBorderStyle } from '../../../../constants/styles';

const SideTabs = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    borderBottom: 'none',
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));
const SideTab = styled((props: { label: string; value: string; icon: any; iconPosition: IconPosition }) => (
  <Tab {...props} />
))(({ theme }) => ({
  minHeight: '46px',
  marginBottom: theme.spacing(2),
  borderRadius: '50px',
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

const styles = {
  root: {
    ...contentBorderStyle,
    width: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    p: 2,
  },
};

const SideNavigation: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [value, setValue] = useState('workout');

  useEffect(() => {
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

  return (
    <Box sx={styles.root}>
      <Typography variant='h6' sx={{ color: 'primary.main', mb: 2, pl: 2 }}>
        Stronger
      </Typography>
      <SideTabs value={value} onChange={handleChange} centered variant='fullWidth' orientation='vertical'>
        <SideTab label='Home' value='home' icon={<DonutSmallOutlinedIcon />} iconPosition='start' />
        <SideTab label='Workout' value='workout' icon={<WhatshotOutlinedIcon />} iconPosition='start' />
        <SideTab label='Profile' value='profile' icon={<AccountCircleOutlinedIcon />} iconPosition='start' />
      </SideTabs>
    </Box>
  );
};

export default SideNavigation;
