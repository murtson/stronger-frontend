import React from 'react';
import { Box, Typography } from '@mui/material';

function SideHistory() {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        height: 325,
        // border: '1px solid #e8e8e8',
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.main',
      }}
    >
      <Typography variant='h6' align='center' sx={{ fontWeight: 600, lineHeight: 1.25 }}>
        History
      </Typography>
    </Box>
  );
}

export default SideHistory;
