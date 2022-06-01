// general
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// mui & components
import { Box, Typography, Button, Tabs, Tab, Divider, styled } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
// constants
import { contentBorderStyle } from '../../../constants/styles';
import { MainRoutePaths, WorkoutSubRoutes, HomeSubRoutes } from '../../../ts/enums/routePaths';

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

type PageValues = MainRoutePaths.HOME | MainRoutePaths.WORKOUT | MainRoutePaths.PROFILE;
type PageTabValues = `/${WorkoutSubRoutes.EXERCISES}` | `/${HomeSubRoutes.STATS}` | '';
type IconPosition = 'top' | 'start' | 'end' | 'bottom';

const styles = {
  root: {
    ...contentBorderStyle,
    width: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    p: 2,
  },
  title: {
    color: 'primary.main',
    mb: 2,
    pl: 2,
  },
};

const SideNavigation: React.FC = () => {
  const [value, setValue] = useState<MainRoutePaths | string>(MainRoutePaths.WORKOUT);
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split('/');
    setValue(pathname[1]);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: PageValues) => {
    let subRoute: PageTabValues;
    if (newValue === MainRoutePaths.WORKOUT) subRoute = `/${WorkoutSubRoutes.EXERCISES}`;
    else if (newValue === MainRoutePaths.HOME) subRoute = `/${HomeSubRoutes.STATS}`;
    else subRoute = '';
    setValue(newValue);
    navigate(`${newValue}${subRoute}`);
  };

  return (
    <Box sx={styles.root}>
      <Typography variant='h6' sx={styles.title}>
        Stronger
      </Typography>
      <SideTabs value={value} onChange={handleChange} centered variant='fullWidth' orientation='vertical'>
        <SideTab
          label='Home'
          value={MainRoutePaths.HOME}
          icon={<DonutSmallOutlinedIcon />}
          iconPosition='start'
        />
        <SideTab
          label='Workout'
          value={MainRoutePaths.WORKOUT}
          icon={<WhatshotOutlinedIcon />}
          iconPosition='start'
        />
        <SideTab
          label='Profile'
          value={MainRoutePaths.PROFILE}
          icon={<AccountCircleOutlinedIcon />}
          iconPosition='start'
        />
      </SideTabs>
    </Box>
  );
};

export default SideNavigation;