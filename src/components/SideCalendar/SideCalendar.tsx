import { Box, Typography } from '@mui/material';
import React from 'react';

function SideCalendar() {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 3,
        height: 300,
        backgroundColor: 'white',
        boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
        // boxShadow: '0px 2px 4px  rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant='h6' align='center' sx={{ fontWeight: 600, lineHeight: 1.25 }}>
        Calendar
      </Typography>
    </Box>
  );
}

export default SideCalendar;
