import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box } from '@mui/material';

const SearchField: React.FC = () => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: { xs: 1, md: 2 },
        marginRight: { xs: 1, md: 2 },
        backgroundColor: { xs: 'neutral.light', md: 'white' },
        borderRadius: 2,
        paddingLeft: 2,
        paddingRight: 2,
        borderWidth: { xs: 0, md: 1 },
        borderStyle: 'solid',
        borderColor: 'divider',
        height: 55,
        margin: { sm: 0, md: '12.5px 0' },
      }}
    >
      <SearchIcon sx={{ marginRight: 2, color: 'primary.main' }} />
      <InputBase
        placeholder='Search for exercises...'
        sx={{ flex: 1, '& .MuiInputBase-input': { color: 'black', fontWeight: 500 } }}
      ></InputBase>
    </Box>
  );
};

export default SearchField;
