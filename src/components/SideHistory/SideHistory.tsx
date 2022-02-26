import React from 'react';
import { Box, Typography } from '@mui/material';

function SideHistory() {
  return (
    <Box
      sx={{
        padding: 3,

        height: 325,
        // border: '1px solid #e8e8e8',
        backgroundColor: 'white',
        boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
      }}
    >
      <Typography variant='h6' align='center' sx={{ fontWeight: 600, lineHeight: 1.25 }}>
        History
      </Typography>
    </Box>
  );
}

export default SideHistory;
