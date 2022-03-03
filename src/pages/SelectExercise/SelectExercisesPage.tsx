import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import { useParams } from 'react-router-dom';
import SelectExerciseHeader from '../../components/Headers/SelectExerciseHeader/SelectExerciseHeader';
import { useGetCategoryExercises, useGetExerciseCategory } from '../../graphql/queries';

const SelectExercisesPage: React.FC = () => {
  const { id } = useParams();

  const {
    data: exercisesData,
    error: exercisesError,
    loading: exercisesIsLoading,
  } = useGetCategoryExercises(Number(id));

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryIsLoading,
  } = useGetExerciseCategory(Number(id));

  return (
    <>
      <SelectExerciseHeader
        isLoading={categoryIsLoading}
        title={categoryData?.exerciseCategory?.type}
      />
      <SearchField />
      <ExerciseList
        categoryExercises={exercisesData?.exercises}
        isLoading={exercisesIsLoading}
        category={categoryData?.exerciseCategory?.type}
      />
    </>
  );
};

export default SelectExercisesPage;
