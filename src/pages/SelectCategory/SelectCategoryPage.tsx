import React from 'react';
import SelectCategoryHeader from './CategoryHeader/SelectCategoryHeader';
import SearchField from '../../components/SearchField/SearchField';
import CategoryList from './CategoryList/CategoryList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SelectCategoryPage: React.FC = () => {
  const categories = useSelector((state: RootState) => state.content.categories);
  const isLoading = useSelector((state: RootState) => state.content.loading);

  return (
    <>
      <SelectCategoryHeader />
      <SearchField />
      <CategoryList categories={categories} isLoading={isLoading} />
    </>
  );
};

export default SelectCategoryPage;
