import { Box, Typography } from '@mui/material';
import React from 'react';

function SideCalendar() {
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
