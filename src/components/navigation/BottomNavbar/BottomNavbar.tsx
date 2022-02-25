import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

type PageValues = 'home' | 'workout' | 'profile';
type PageTabValues = 'stats' | 'exercises' | 'feed';

const BottomNavbar: React.FC = () => {
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
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'divider',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <BottomNavigationAction icon={<DonutSmallOutlinedIcon />} value='home' />
      <BottomNavigationAction icon={<WhatshotOutlinedIcon />} value='workout' />
      <BottomNavigationAction icon={<AccountCircleOutlinedIcon />} value='profile' />
    </BottomNavigation>
  );
};

export default BottomNavbar;
