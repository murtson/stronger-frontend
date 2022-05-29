// general
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// mui & components
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
// constants
import { MainRoutePaths, HomeSubRoutes, WorkoutSubRoutes } from '../../ts/enums/routePaths';

const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'divider',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

type PageValues = MainRoutePaths.HOME | MainRoutePaths.WORKOUT | MainRoutePaths.PROFILE;
type PageTabValues = `/${WorkoutSubRoutes.EXERCISES}` | `/${HomeSubRoutes.STATS}` | '';

const BottomNavbar: React.FC = () => {
  const [value, setValue] = useState<PageValues | string>(MainRoutePaths.WORKOUT);
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
    navigate(`${newValue}/${subRoute}`);
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} sx={styles.root}>
      <BottomNavigationAction
        data-testid='home-bottom-navbar'
        icon={<DonutSmallOutlinedIcon />}
        value={MainRoutePaths.HOME}
      />
      <BottomNavigationAction
        data-testid='workout-bottom-navbar'
        icon={<WhatshotOutlinedIcon />}
        value={MainRoutePaths.WORKOUT}
      />
      <BottomNavigationAction
        data-testid='profile-bottom-navbar'
        icon={<AccountCircleOutlinedIcon />}
        value={MainRoutePaths.PROFILE}
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
