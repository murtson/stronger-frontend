import { Box, Typography, IconButton, Divider } from '@mui/material';
import React from 'react';
import { ExerciseSet } from '../../../../../../ts/interfaces/ExerciseSet';
import { ExerciseCategory } from '../../../../../../ts/interfaces/ExerciseCategory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux/store';

interface Props {
  setIndex: number;
  exerciseSet: ExerciseSet;
}

const LoggedExerciseHeader: React.FC<Props> = ({ setIndex, exerciseSet }) => {
  const category = useSelector((state: RootState) => state.content.categories).find(
    (category) => category.id.toString() === exerciseSet.exercise.categoryId.toString()
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: exerciseSet.exercise.color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mr: 2,
          }}
        >
          <Typography variant='body1' sx={{ color: 'white' }}>
            {setIndex + 1}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant='subtitle1'>{exerciseSet.exercise.name}</Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {exerciseSet.sets.length} sets - {category?.name.toLowerCase()} - compound
          </Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default LoggedExerciseHeader;
