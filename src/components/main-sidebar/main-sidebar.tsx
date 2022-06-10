import { Drawer, Box, Divider } from '@mui/material';
import React, { useState } from 'react';

interface Props {
  open: boolean;
}

const styles = {
  root: {
    position: 'absolute',
    width: { xs: '100%', md: 240 },
    height: { xs: `calc(100% - ${48}px)`, md: `calc(100% - ${64}px)` },
    mt: { xs: 7, md: 8 },
    backgroundColor: '#ffffff',
    zIndex: 1200,
    transition: 'all 0.25s',
  },
};

const MainSidebar: React.FC<Props> = ({ open }) => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.root, left: open ? 0 : -400 }}></Box>;
    </React.Fragment>
  );
};

export default MainSidebar;
