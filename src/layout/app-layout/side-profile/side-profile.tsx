// general
import React from 'react';
// mui & components
import { Box } from '@mui/material';
// constants
import { CONTENT_BORDER_STYLE } from '../../../constants/styles-constants';

const styles = {
  root: {
    ...CONTENT_BORDER_STYLE,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 60,
  },
};

const SideProfile = () => {
  return <Box sx={styles.root}></Box>;
};

export default SideProfile;
