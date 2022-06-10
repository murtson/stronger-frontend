import React from 'react';
import { Toolbar, AppBar, IconButton } from '@mui/material';
import { HEADER_HEIGHT } from '../../constants/styles-constants';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  handleSidebarOpen: () => void;
}

const MainHeader: React.FC<Props> = ({ handleSidebarOpen }) => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton onClick={handleSidebarOpen}>
          <MenuIcon sx={{ color: '#ffffff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
