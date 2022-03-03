import React from 'react';
import { Box, Grid, Typography, IconButton, Stack } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Exercise from '../../../interfaces/Exercise';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const tabsArray = [
  { value: 'track', label: 'Track' },
  { value: 'history', label: 'History' },
  { value: 'graph', label: 'Graph' },
];

interface Props {
  title: string;
}

const LogExerciseHeader: React.FC<Props> = ({ title }) => {
  let navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
        backgroundColor: { xs: 'white', md: 'transparent' },
        // padding: { xs: 1, md: '8px 0' },
        padding: { xs: 1, md: '16px 0' },
        height: { xs: 100, md: 'auto' },
        boxSizing: 'border-box',
        marginBottom: 0,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'text.primary', marginRight: 2 }} onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant='h6'>Log Exercise</Typography>
        </Box>

        <IconButton sx={{ color: 'text.primary' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LogExerciseHeader;

// />}
