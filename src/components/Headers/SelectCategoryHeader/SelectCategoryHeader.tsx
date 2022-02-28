import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const SelectCategoryHeader: React.FC = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexDirection: 'column',
        height: { xs: 99, md: 125 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white',
      }}
    >
      <Grid
        container
        sx={{
          flex: 1,
          paddingLeft: { xs: 1, md: 0 },
          paddingRight: { xs: 1, md: 0 },
          paddingTop: { xs: 1, md: 1 },
        }}
      >
        <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'text.primary' }} onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography variant='h6' sx={{ fontWeight: 600, paddingLeft: { xs: 1, md: 3 } }}>
            Category
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton sx={{ color: 'text.primary' }} onClick={() => navigate('/workout/exercises')}>
            <CloseOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectCategoryHeader;
