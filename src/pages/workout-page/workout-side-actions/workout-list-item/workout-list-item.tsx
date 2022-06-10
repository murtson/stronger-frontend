import { ListItem, ListItemButton, ListItemIcon, Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
  icon: any;
  bgColor?: string;
  handleOnClick: () => void;
}

const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: 'primary.contrastText',
    padding: 1,
    transition: 'all 0.25s',
  },
};

const WorkoutListItem: React.FC<Props> = ({
  icon: Icon,
  children,
  bgColor = 'primary.main',
  handleOnClick,
}) => {
  return (
    <ListItem disablePadding onClick={handleOnClick}>
      <ListItemButton sx={{ py: 2 }}>
        <ListItemIcon>
          <Box sx={{ ...styles.iconContainer, backgroundColor: bgColor }}>{Icon}</Box>
        </ListItemIcon>
        <Typography variant='subtitle1'>{children}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default WorkoutListItem;
