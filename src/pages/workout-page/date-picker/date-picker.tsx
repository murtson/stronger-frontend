// general
import React from 'react';
// mui & components
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { incrementDate, decrementDate } from '../../../redux/slices/workout-slice';

const styles = {
  root: {
    padding: 0.5,
    borderBox: 'box-fit',
    my: { xs: 0.5, md: 1 },
  },
  leftButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};

const Datepicker: React.FC = () => {
  const { selectedDate } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={3} sx={styles.leftButton}>
        <IconButton sx={{ color: 'text.secondary' }} onClick={() => dispatch(decrementDate())}>
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} sx={styles.dateTitle}>
        <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
          {selectedDate.displayValue}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={styles.rightButton}>
        <IconButton sx={{ color: 'text.secondary' }} onClick={() => dispatch(incrementDate())}>
          <ArrowForwardOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Datepicker;
