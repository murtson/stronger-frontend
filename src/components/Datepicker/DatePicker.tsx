import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Datepicker: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: {
          xs: '40px',
          md: '46px',
        },
        marginTop: { md: '25px' },
        borderRadius: { xs: 0, md: 2 },
        boxShadow: {
          xs: 'none',
          md: '0 2px 1px 0 rgb(0 0 0 / 10%)',
        },
        borderBottom: { xs: '1px solid #e8e8e8', md: 'none' },
        paddingLeft: {
          md: 1,
        },
        paddingRight: {
          md: 1,
        },
        backgroundColor: 'white',
        borderBox: 'box-fit',
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
