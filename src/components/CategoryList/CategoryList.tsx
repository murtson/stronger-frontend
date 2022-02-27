import { Box } from '@mui/material';
import React from 'react';

const CategoryList: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: { xs: 0, md: 2 },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
      }}
    ></Box>
  );
};

export default CategoryList;
