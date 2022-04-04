import {
  Box,
  styled,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Grid,
} from '@mui/material';
import React from 'react';
import { ExerciseSet } from '../../../../../../ts/interfaces/ExerciseSet';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& td, & th': {
    border: 0,
  },
  '&.MuiTableRow-root.Mui-selected': {
    backgroundColor: theme.palette.info.light,
    '&:hover': {
      backgroundColor: theme.palette.info.light,
    },
  },
}));

interface Props {
  exerciseSet: ExerciseSet;
}

const LoggedExerciseBody: React.FC<Props> = ({ exerciseSet }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
      <Grid container spacing={1} alignItems={'center'} sx={{ pr: 1 }}>
        {exerciseSet.sets.map((row, index) => (
          <>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={3} sx={{ textAlign: 'right' }}>
              <Typography
                variant='subtitle1'
                sx={{
                  display: 'inline-block',
                }}
              >
                {row.weight}
              </Typography>{' '}
              <Typography
                variant='subtitle2'
                sx={{ display: 'inline-block', color: 'text.secondary' }}
              >
                kgs
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'right' }}>
              <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                x
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: 'right' }}>
              <Typography variant='subtitle1' sx={{ display: 'inline-block' }}>
                {row.reps}
              </Typography>{' '}
              <Typography
                variant='subtitle2'
                sx={{ display: 'inline-block', color: 'text.secondary' }}
              >
                reps
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default LoggedExerciseBody;
