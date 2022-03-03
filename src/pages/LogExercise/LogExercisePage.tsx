import React from 'react';
import LogExerciseHeader from '../../components/Headers/LogExerciseHeader/LogExerciseHeader';
import CategoryList from '../../components/CategoryList/CategoryList';
import { useParams } from 'react-router-dom';
import { useGetExercise } from '../../graphql/queries';
import { Box } from '@mui/material';

const LogExercisePage: React.FC = () => {
  const { id } = useParams();
  const { data, error, loading } = useGetExercise(Number(id));

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <LogExerciseHeader title={data?.exercise?.name} />
    </Box>
  );
};

export default LogExercisePage;
