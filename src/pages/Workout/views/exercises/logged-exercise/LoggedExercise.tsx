import React from 'react';
import { ExerciseSet } from '../../../../../ts/interfaces/ExerciseSet';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LoggedExerciseHeader from './header/LoggedExerciseHeader';
import LoggedExerciseBody from './body/LoggedExerciseBody';

interface props {
  exerciseSet: ExerciseSet;
  setIndex: number;
}

export const LoggedExercise: React.FC<props> = ({ exerciseSet, setIndex }) => {
  const theme = useTheme();
  return (
    <Box
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
      <LoggedExerciseBody exerciseSet={exerciseSet} />
    </Box>
  );
};

export default LoggedExercise;
