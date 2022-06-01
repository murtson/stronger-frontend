// general
import React from 'react';
// mui & components
import { Box } from '@mui/material';
// constants
import { contentBorderStyle } from '../../../constants/styles';

const styles = {
  root: {
    ...contentBorderStyle,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 60,
  },
};

const SideProfile = () => {
  return <Box sx={styles.root}></Box>;
};

export default SideProfile;
