import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const AppHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // position: 'fixed',
        height: 56,
        width: '100%',
        backgroundColor: 'white',
        borderBottom: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
        mb: 2,
        // opacity: 0.72,
        zIndex: -1,
      }}
    ></Box>
  );
};

export default AppHeader;
