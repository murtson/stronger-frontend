import React from 'react';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const HelpSettingsList: React.FC = () => {
  return (
    <List subheader={<ListSubheader>Help</ListSubheader>}>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpOutlineIcon sx={{ color: 'text.secondary' }} />
          </ListItemAvatar>
          <ListItemText primary='Help' sx={{ fontWeight: 500 }} />
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <NavigateNextIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <QuestionAnswerIcon sx={{ color: 'text.secondary' }} />
          </ListItemAvatar>
          <ListItemText primary='FAQ' sx={{ fontWeight: 500 }} />
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <NavigateNextIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton>
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
            <AlternateEmailIcon sx={{ color: 'text.secondary' }} />
          </ListItemAvatar>
          <ListItemText primary='Contact' sx={{ fontWeight: 500 }} />
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <NavigateNextIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default HelpSettingsList;
