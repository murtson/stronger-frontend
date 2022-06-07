// general
import React from 'react';
// mui & components
import { Box, Divider, Typography } from '@mui/material';
import PreferencesList from './preferences-settings-list/preferences-settings-list';
import SystemSettingsList from './system-settings-list/system-settings-list';
import HelpSettingsList from './help-settings-list/help-settings-list';
// constants
import { CONTENT_BORDER_STYLE } from '../../../constants/styles-constants';

const styles = {
  root: {
    ...CONTENT_BORDER_STYLE,
    backgroundColor: '#ffffff',
    flex: 1,
    overflow: 'hidden',
  },
};

const SideSettings: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant='h6' sx={{ px: 2, py: 2 }}>
        Settings
      </Typography>
      <Divider />
      <SystemSettingsList />
      <Divider />
      <PreferencesList />
      <Divider />
      <HelpSettingsList />
    </Box>
  );
};

export default SideSettings;
