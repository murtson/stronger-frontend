import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, Divider } from '@mui/material';

const SearchField: React.FC = () => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: { xs: '8px 16px 0 16px', md: '16px 0' },
        backgroundColor: { xs: 'white', md: 'white' },
        borderRadius: { xs: 20, md: 20 },
        paddingLeft: 1,
        paddingRight: 1,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'divider',
        height: 42,
        // borderBottom: { xs: `1px solid rgba(0, 0, 0, 0.12)`, md: 'none' },
        border: { xs: '1px solid rgba(0, 0, 0, 0.12)' },
      }}
    >
      <SearchIcon sx={{ padding: 1, marginRight: 2, color: 'primary.main' }} />
      <InputBase
        placeholder='Search for exercises...'
        sx={{ flex: 1, '& .MuiInputBase-input': { color: 'black', fontWeight: 500 } }}
      ></InputBase>
    </Box>
  );
};

export default SearchField;
