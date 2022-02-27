import React from 'react';
import { Box, Typography } from '@mui/material';

function SideHistory() {
  return (
    <Box
      sx={{
        height: 325,
        backgroundColor: 'white',
        boxSizing: 'border-box',
        padding: 3,
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant='h6' align='center' sx={{ fontWeight: 600, lineHeight: 1.25 }}>
        History
      </Typography>
    </Box>
  );
}

export default SideHistory;
