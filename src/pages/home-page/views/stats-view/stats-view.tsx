// general
import React from 'react';
// mui & components
import { Box, Typography } from '@mui/material';
// constants
import { CONTENT_BORDER_STYLE } from '../../../../constants/styles-constants';

const StatsView: React.FC = () => {
  return (
    <Box
      sx={{
        ...CONTENT_BORDER_STYLE,
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
