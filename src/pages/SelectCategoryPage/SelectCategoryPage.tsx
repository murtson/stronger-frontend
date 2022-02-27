import React from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SelectCategoryHeader from '../../components/Headers/SelectCategoryHeader/SelectCategoryHeader';
import SearchField from '../../components/SearchField/SearchField';

const SelectCategoryPage: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container
      maxWidth='md'
      disableGutters
      sx={{ height: '100vh', display: 'flex', alignItems: { xs: 'flex-start', md: 'center' } }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
          borderRadius: 1,
          overflow: 'hidden',
          minHeight: 600,
        }}
      >
        <SelectCategoryHeader />
        <Box sx={{ backgroundColor: 'white', flex: 1 }}></Box>
      </Box>
    </Container>
  );
};

export default SelectCategoryPage;
