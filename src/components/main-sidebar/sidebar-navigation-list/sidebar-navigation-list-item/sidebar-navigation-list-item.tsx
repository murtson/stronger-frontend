import { ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import React from 'react';

interface Props {
  icon: any;
}

const SidebarNavigationListItem: React.FC<Props> = ({ icon: IconComponent, children }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ py: 2 }}>
        <ListItemIcon sx={{ color: 'text.primary' }}>{IconComponent}</ListItemIcon>
        <Typography variant='subtitle1'>{children}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarNavigationListItem;
