import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SelectCategoryHeader: React.FC = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
        // backgroundColor: { xs: 'white', md: 'transparent' },
        // padding: { xs: 1, md: '8px 0' },

        // height: { xs: 100, md: 'auto' },
        boxSizing: 'border-box',
        marginBottom: { xs: 0, md: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: 1, md: '16px 0' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'text.primary' }} onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Box>
        <Typography variant='h6'>Categories</Typography>
        <IconButton sx={{ color: 'text.primary' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SelectCategoryHeader;
