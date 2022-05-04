// general
import React from 'react';
import { useNavigate } from 'react-router-dom';
// mui & components
import { ListItemButton, ListItem, IconButton } from '@mui/material';
import LoggedExerciseHeader from './LoggedExerciseHeader/LoggedExerciseHeader';
import LoggedExerciseBody from './LoggedExerciseBody/LoggedExerciseBody';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// redux
import { useAppDispatch } from '../../../../../redux/store';
import { setEditingExercise } from '../../../../../redux/slices/workoutSlice';
// interfaces
import { ExerciseSet } from '../../../../../ts/interfaces/ExerciseSet';

const styles = {
  root: {
    p: 0,
    position: 'relative',
  },
  listItemButton: {
    px: 0,
    py: 2,
    display: 'block',
  },
  iconButton: {
    position: 'absolute',
    zIndex: 2,
    right: '16px',
    top: '12px',
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
    <ListItem sx={styles.root} divider>
      <IconButton sx={styles.iconButton}>
        <MoreHorizIcon />
      </IconButton>
      <ListItemButton onClick={handleClick} sx={styles.listItemButton}>
        <LoggedExerciseHeader setIndex={setIndex} exerciseSet={exerciseSet} />
        <LoggedExerciseBody exerciseSet={exerciseSet} />
      </ListItemButton>
    </ListItem>
  );
};

export default LoggedExercise;
