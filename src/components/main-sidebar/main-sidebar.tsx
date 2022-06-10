import { Drawer, Box, Divider, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { SIDEBAR_WIDTH } from '../../constants/styles-constants';

interface Props {
  open: boolean;
}

const styles = {
  root: {
    position: 'absolute',
    width: { xs: '100%', md: SIDEBAR_WIDTH },
    height: { xs: `calc(100% - ${56}px)`, md: `calc(100% - ${64}px)` },
    mt: { xs: 7, md: 8 },
    backgroundColor: '#ffffff',
    zIndex: 100,
    transition: 'all 0.25s',
  },
};

const MainSidebar: React.FC<Props> = ({ open }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...styles.root,
        left: open ? 0 : -400,
        borderRight: { xs: 'none', md: `1px solid ${theme.palette.neutral.main}` },
      }}
    ></Box>
  );
};

export default MainSidebar;
