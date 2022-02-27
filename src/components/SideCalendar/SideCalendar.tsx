import { Box, Typography } from '@mui/material';
import React from 'react';

function SideCalendar() {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        height: 325,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.main',
        boxSizing: 'border-box',
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
