import React, { ReactElement } from 'react';
import { Button, SvgIconTypeMap, SxProps, Theme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'neutral';
  children: ReactElement;
  styles?: SxProps<Theme> | undefined;
}

const StyledIconButton: React.FC<Props> = ({ children, color, styles }) => {
  return (
    <Button
      variant='outlined'
      color={color}
      sx={{
        borderColor: 'neutral.main',
        // '&:hover': { borderColor: 'neutral.main' },
        minWidth: 0,
        padding: 0.5,
        borderRadius: 1,
        ...styles,
      }}
    >
      {children}
    </Button>
  );
};

export default StyledIconButton;
