import React from 'react';
import { Box, Grid, Typography, IconButton, Stack } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Exercise } from '../../../ts/interfaces/Exercise';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const LogExerciseHeader: React.FC = () => {
  let navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
        // backgroundColor: { xs: 'white', md: 'transparent' },
        // padding: { xs: 1, md: '8px 0' },
        padding: { xs: 1, md: '16px 0' },
        boxSizing: 'border-box',
        marginBottom: 0,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'text.primary' }} onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Box>
        <Typography variant='h6'>Log</Typography>
        <IconButton sx={{ color: 'text.primary' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LogExerciseHeader;

// />}
