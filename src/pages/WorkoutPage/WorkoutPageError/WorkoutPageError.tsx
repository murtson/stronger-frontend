import React from 'react';

import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    mb: { xs: 0, md: 2 },
    boxShadow: { xs: 0, md: 1 },
    borderStyle: 'solid',
    borderWidth: { xs: 1, md: 0 },
    borderColor: 'divider',
    borderRadius: { xs: 0, md: 2 },
  },
  contentContainer: {
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    px: { xs: 2, md: 0 },
  },
};

interface Props {
  loading: boolean;
  handleRetryClick: () => void;
}

const WorkoutPageError: React.FC<Props> = ({ loading, handleRetryClick }) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contentContainer}>
        <Typography
          variant='subtitle1'
          textAlign={'center'}
          sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
        >
          Oops, something went wrong
        </Typography>
        <Typography
          variant='subtitle2'
          textAlign={'center'}
          sx={{ color: 'text.secondary', mb: 3 }}
        >
          It seems like an unexpected error has occured. We now know about this mistake and are
          working on to fix it.
        </Typography>
        <LoadingButton
          loading={loading}
          variant='contained'
          onClick={handleRetryClick}
          sx={{ margin: '0 auto', width: 175, borderRadius: 20 }}
        >
          Retry
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default WorkoutPageError;
