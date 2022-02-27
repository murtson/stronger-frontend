import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  InputLabel,
  InputBase,
  OutlinedInput,
  InputAdornment,
  FormLabel,
  Box,
} from '@mui/material';

const SearchField: React.FC = () => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: 1,
        backgroundColor: 'neutral.light',
        borderRadius: 20,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'neutral.main',
      }}
    >
      <InputBase placeholder='Search for exercises' sx={{ flex: 1 }}></InputBase>
      <SearchIcon sx={{}} />
    </Box>
  );
};

export default SearchField;
