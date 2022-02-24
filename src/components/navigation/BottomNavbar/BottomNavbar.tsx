import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { styled } from '@mui/material/styles';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function BottomNavbar() {
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
      <BottomNavigationAction icon={<AddCircleOutlineOutlinedIcon />} />
      <BottomNavigationAction icon={<AccountCircleOutlinedIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavbar;
