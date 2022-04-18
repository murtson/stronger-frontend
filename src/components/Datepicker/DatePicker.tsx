import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { incrementDate, decrementDate } from '../../redux/slices/workoutSlice';
import { useTheme } from '@mui/material';

const Datepicker: React.FC = () => {
  const { selectedDate } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        padding: 0.5,
        borderBox: 'box-fit',
        my: { xs: 0.5, md: 1 },

        // borderRadius: 2,
        // boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        // backgroundColor: { xs: 'transparent', md: 'white' },
        // border: { xs: 'none', md: `1px solid ${theme.palette.divider}` },

        // borderTop: `1px solid ${theme.palette.divider}`,
        // borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <IconButton sx={{ color: 'text.secondary' }} onClick={() => dispatch(decrementDate())}>
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
          {selectedDate.displayValue}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <IconButton sx={{ color: 'text.secondary' }} onClick={() => dispatch(incrementDate())}>
          <ArrowForwardOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Datepicker;
