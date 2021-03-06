import React from 'react';
import SelectCategoryHeader from './category-header/select-category-header';
import SearchField from '../../components/search-field/search-field';
import CategoryList from './category-list/category-list';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SelectCategoryPage: React.FC = () => {
  const categories = useSelector((state: RootState) => state.content.categories);
  const isLoading = useSelector((state: RootState) => state.content.loading);

  return (
    <React.Fragment>
      <SelectCategoryHeader />
      <SearchField />
      <CategoryList categories={categories} isLoading={isLoading} />
    </React.Fragment>
  );
};

export default SelectCategoryPage;
