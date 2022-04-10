import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExerciseSet } from '../../../../../ts/interfaces/ExerciseSet';
import { ListItemButton } from '@mui/material';
import LoggedExerciseHeader from './header/LoggedExerciseHeader';
import LoggedExerciseBody from './body/LoggedExerciseBody';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState } from '../../../../../redux/store';
import { setEditingExercise } from '../../../../../redux/slices/workoutSlice';

const styles = {
  root: {
    px: 0,
    py: 2,
    display: 'block',
  },
};

interface props {
  exerciseSet: ExerciseSet;
  setIndex: number;
}

export const LoggedExercise: React.FC<props> = ({ exerciseSet, setIndex }) => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setEditingExercise(exerciseSet));
    navigate(`/log/${exerciseSet.exercise.id}`);
  };

  return (
    <ListItemButton onClick={handleClick} sx={styles.root} divider>
      <LoggedExerciseHeader setIndex={setIndex} exerciseSet={exerciseSet} />

      <LoggedExerciseBody exerciseSet={exerciseSet} />
    </ListItemButton>
  );
};

export default LoggedExercise;
