import React from 'react';
import { Box, Typography } from '@mui/material';

function SideHistory() {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 3,
        height: 300,
        // border: '1px solid #e8e8e8',
        backgroundColor: 'white',
        // boxShadow: '0px 4px 8px  rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant='h6' align='center' sx={{ fontWeight: 600, lineHeight: 1.25 }}>
        History
      </Typography>
    </Box>
  );
}

export default SideHistory;
