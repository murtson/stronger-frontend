import React from 'react';
import SelectCategoryHeader from '../../components/Headers/SelectCategoryHeader/SelectCategoryHeader';
import SearchField from '../../components/SearchField/SearchField';
import CategoryList from '../../components/CategoryList/CategoryList';
import { TextField } from '@mui/material';

const SelectCategoryPage: React.FC = () => {
  return (
    <>
      <SelectCategoryHeader />

      <SearchField />
      <CategoryList />
    </>
  );
};

export default SelectCategoryPage;
