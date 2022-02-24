import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const BottomNavbar: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        display: {
          xs: 'flex',
          sm: 'none',
        },
        position: 'fixed',
        width: '100%',
        bottom: 0,
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'divider',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 598,
      }}
    >
      <BottomNavigationAction icon={<DonutSmallOutlinedIcon />} />
      <BottomNavigationAction icon={<WhatshotOutlinedIcon />} />
      <BottomNavigationAction icon={<AccountCircleOutlinedIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavbar;
