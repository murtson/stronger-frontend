import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import React from 'react';

const SystemSettingsList = () => {
  return (
    <List subheader={<ListSubheader>System</ListSubheader>}>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <DataUsageOutlinedIcon sx={{ color: 'text.secondary' }} />
          </ListItemAvatar>
          <ListItemText primary='Unit System' secondary='Metric' />
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <DataSaverOnOutlinedIcon sx={{ color: 'text.secondary' }} />
          </ListItemAvatar>
          <ListItemText primary='Default Weight Increment' secondary='2.5 kg' />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SystemSettingsList;
