import React from 'react';
import SelectCategoryHeader from '../../components/Headers/SelectCategoryHeader/SelectCategoryHeader';
import SearchField from '../../components/SearchField/SearchField';
import ExerciseList from '../../components/ExerciseList/ExerciseList';

const SelectExercisesPage: React.FC = () => {
  return (
    <>
      <SelectCategoryHeader />
      <SearchField />
      <ExerciseList />
    </>
  );
};

export default SelectExercisesPage;
