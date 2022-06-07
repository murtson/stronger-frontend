import React from 'react';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  Switch,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const PreferencesList = () => {
  return (
    <List subheader={<ListSubheader>Preferences</ListSubheader>}>
      <ListItem>
        <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
          <DarkModeIcon sx={{ color: 'text.secondary' }} />
        </ListItemAvatar>
        <ListItemText primary='Dark Theme' sx={{ fontWeight: 500 }} />
        <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Switch
            edge='end'
            inputProps={{
              'aria-labelledby': 'switch-list-label-bluetooth',
            }}
          />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default PreferencesList;
