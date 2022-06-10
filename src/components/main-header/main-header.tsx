import React from 'react';
import { Toolbar, AppBar, IconButton, Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import { HEADER_HEIGHT } from '../../constants/styles-constants';
import MenuIcon from '@mui/icons-material/Menu';
import { SIDEBAR_WIDTH } from '../../constants/styles-constants';

interface Props {
  handleSidebarOpen: () => void;
}

const styles = {
  root: {
    zIndex: 200,
    backgroundColor: '#ffffff',
    boxShadow: 0,
  },
  logoSpan: {
    display: 'flex',
    height: '100%',
    width: `${SIDEBAR_WIDTH}`,
  },
};

const MainHeader: React.FC<Props> = ({ handleSidebarOpen }) => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar
      position='fixed'
      sx={{ ...styles.root, borderBottom: (theme) => `1px solid ${theme.palette.neutral.main}` }}
    >
      <Toolbar>
        <Box sx={{ ...styles.logoSpan }}>
          {isMediumAndUpScreen ? null : (
            <IconButton onClick={handleSidebarOpen}>
              <MenuIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
