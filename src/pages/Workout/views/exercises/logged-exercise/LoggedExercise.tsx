import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExerciseSet } from '../../../../../ts/interfaces/ExerciseSet';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LoggedExerciseHeader from './header/LoggedExerciseHeader';
import LoggedExerciseBody from './body/LoggedExerciseBody';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState } from '../../../../../redux/store';
import { setEditingExercise } from '../../../../../redux/slices/workoutSlice';

interface props {
  exerciseSet: ExerciseSet;
  setIndex: number;
}

export const LoggedExercise: React.FC<props> = ({ exerciseSet, setIndex }) => {
  const theme = useTheme();
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setEditingExercise(exerciseSet));
    navigate(`/log/${exerciseSet.exercise.id}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        pt: 2,
        pb: 2,
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:hover': {
          backgroundColor: `${theme.palette.neutral.light}`,
        },
        cursor: 'pointer',
      }}
    >
      <LoggedExerciseHeader setIndex={setIndex} exerciseSet={exerciseSet} />
      {/* <Divider sx={{ opacity: 0.5, mb: 2 }} /> */}
      <LoggedExerciseBody exerciseSet={exerciseSet} />
    </Box>
  );
};

export default LoggedExercise;
