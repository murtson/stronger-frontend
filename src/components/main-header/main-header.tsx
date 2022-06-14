import React, { Fragment } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderAvatar from './header-avatar/header-avatar';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  handleSidebarOpen: () => void;
  sideBarOpen: boolean;
}

const styles = {
  root: {
    zIndex: 300,
    backgroundColor: '#101f34',
    boxShadow: { xs: 0, md: 3 },
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'text.primary',
  },
  leftSpan: {
    display: 'flex',

    alignItems: 'center',
    flex: 1,
  },
  middleSpan: {
    display: 'flex',
    justifyContent: 'center',
    flex: 2,
  },
  rightSpan: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 2,
    flex: 1,
  },
};

const MainHeader: React.FC<Props> = ({ handleSidebarOpen, sideBarOpen }) => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar
      position='fixed'
      sx={{
        ...styles.root,
      }}
    >
      <Toolbar sx={styles.toolBar}>
        <Box sx={{ ...styles.leftSpan }}>
          <Typography variant='h6' sx={{ color: 'primary.contrastText' }}>
            STRONGER
          </Typography>
        </Box>
        <Box sx={styles.rightSpan}>
          {isMediumAndUpScreen ? (
            <Fragment>
              <IconButton>
                <HelpOutlineOutlinedIcon sx={{ color: 'primary.contrastText' }} />
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon sx={{ color: 'primary.contrastText' }} />
              </IconButton>
              <IconButton>
                <SettingsOutlinedIcon sx={{ color: 'primary.contrastText' }} />
              </IconButton>
              <HeaderAvatar />
            </Fragment>
          ) : (
            <IconButton onClick={handleSidebarOpen}>
              {sideBarOpen ? (
                <CloseIcon sx={{ color: 'primary.contrastText' }} />
              ) : (
                <MenuIcon sx={{ color: 'primary.contrastText' }} />
              )}
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
