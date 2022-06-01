// general
import React from 'react';
// mui & components
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
// constants
import { CONTENT_BORDER_STYLE } from '../../../constants/styles-constants';

const styles = {
  root: {
    ...CONTENT_BORDER_STYLE,
    flex: 1,
    display: 'flex',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const NoLoggedWorkout: React.FC = () => {
  return (
    <Box sx={styles.root}>
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

export default NoLoggedWorkout;
