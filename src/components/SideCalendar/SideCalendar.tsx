import { Box, Typography, IconButton, Paper } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React from 'react';

function SideCalendar() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxSizing: 'border-box',
        padding: 1,
        borderRadius: 2,

        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'divider',
        boxShadow: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton>
          <NavigateBeforeIcon />
        </IconButton>
        <Typography variant='subtitle1' align='center'>
          April 2022
        </Typography>
        <IconButton>
          <NavigateNextIcon />
        </IconButton>
      </Box>

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
