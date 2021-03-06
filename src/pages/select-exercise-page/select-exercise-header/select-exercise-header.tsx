import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, IconButton, Skeleton, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SelectExerciseHeader: React.FC = () => {
  let navigate = useNavigate();
  const { id } = useParams();
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
        // height: { xs: 100, md: 'auto' },
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
        <Typography variant='h6'>Exercises</Typography>
        <IconButton sx={{ color: 'text.primary' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SelectExerciseHeader;
