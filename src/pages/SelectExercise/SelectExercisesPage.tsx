import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import { useParams } from 'react-router-dom';
import SelectExerciseHeader from '../../components/Headers/SelectExerciseHeader/SelectExerciseHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SelectExercisesPage: React.FC = () => {
  const { id } = useParams();
  const exercises = useSelector((state: RootState) => state.content.exercises).filter(
    (exercise) => exercise.categoryId.toString() === id
  );
  const isLoading = useSelector((state: RootState) => state.content.loading);
  const category = useSelector((state: RootState) => state.content.categories).find(
    (category) => category.id.toString() === id
  );

  return (
    <>
      <SelectExerciseHeader />
      <SearchField />
      <ExerciseList categoryExercises={exercises} isLoading={isLoading} category={category?.type} />
    </>
  );
};

export default SelectExercisesPage;
