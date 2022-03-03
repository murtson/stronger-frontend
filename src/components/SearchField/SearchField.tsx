import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, Divider } from '@mui/material';

const SearchField: React.FC = () => {
  return (
    <>
      <Box
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: { xs: 0, md: '16px 0' },
          backgroundColor: { xs: 'white', md: 'white' },
          borderRadius: { xs: 0, md: 2 },
          paddingLeft: 1,
          paddingRight: 1,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'divider',
          height: 48,
          // borderBottom: { xs: `1px solid rgba(0, 0, 0, 0.12)`, md: 'none' },
          border: { xs: 'none', md: '1px solid rgba(0, 0, 0, 0.12)' },
        }}
      >
        <SearchIcon sx={{ padding: 1, marginRight: 2, color: 'primary.main' }} />
        <InputBase
          placeholder='Search for exercises...'
          sx={{ flex: 1, '& .MuiInputBase-input': { color: 'black', fontWeight: 500 } }}
        ></InputBase>
      </Box>
      <Divider sx={{ border: { md: 0 } }} />
    </>
  );
};

export default SearchField;
