import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Datepicker: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        padding: {
          xs: 0,
          md: 1,
        },
        borderBottom: { xs: '1px solid #e8e8e8', md: 'none' },
        backgroundColor: 'white',
        borderRadius: { md: 4 },
        marginTop: { md: '25px' },
      }}
    >
      <Grid
        item
        xs={3}
        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <IconButton sx={{ color: 'text.primary' }}>
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='subtitle1'>2022-02-24</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <IconButton sx={{ color: 'text.primary' }}>
          <ArrowForwardOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Datepicker;
