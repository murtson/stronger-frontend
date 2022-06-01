// general
import React from 'react';
// mui & components
import { Box, Typography } from '@mui/material';
// constants
import { contentBorderStyle } from '../../../../constants/styles';

const StatsView: React.FC = () => {
  return (
    <Box
      sx={{
        ...contentBorderStyle,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
        Stats coming soon...
      </Typography>
    </Box>
  );
};

export default StatsView;
