import React from 'react';
import SideNavigation from './SideNav/SideNavigation';
import SideProfile from './SideProfile/SideProfile';
import SideActions from './SideActions/SideActions';
import { Box } from '@mui/material';

const styles = {
  leftSideGrid: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    px: 3,
  },
};

const AppLayoutLeftGrid: React.FC = () => {
  return (
    <Box sx={styles.leftSideGrid}>
      <SideNavigation />
      <SideActions />
      <SideProfile />
    </Box>
  );
};

export default AppLayoutLeftGrid;
