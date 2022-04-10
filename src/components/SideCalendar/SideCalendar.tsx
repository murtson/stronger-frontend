import { Box, Typography } from '@mui/material';
import React from 'react';

function SideCalendar() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxSizing: 'border-box',
        padding: 3,
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        variant='subtitle1'
        align='center'
        sx={{ fontWeight: 600, lineHeight: 1.25 }}
      ></Typography>
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          height: 325,
        }}
      ></Box>
    </Box>
  );
}

export default SideCalendar;
