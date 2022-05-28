import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const NoSavedWorkout: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: { xs: 0, md: 1 },
        borderRadius: { xs: 0, md: 2 },
        mb: { xs: 0, md: 2 },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: 480, px: { xs: 2, md: 0 } }}>
        <Typography
          variant='subtitle1'
          textAlign={'center'}
          sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
        >
          Rest day perhaps?
        </Typography>
        <Typography variant='subtitle2' textAlign={'center'} sx={{ color: 'text.secondary' }}>
          There is no workout saved for this date. Tap the 'New workout' or "Copy another workout" button to
          log a new workout.
        </Typography>
      </Box>
    </Box>
  );
};

export default NoSavedWorkout;
