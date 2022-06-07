// general
import React from 'react';
// mui & components
import { Box, Grid, useMediaQuery, useTheme, Stack } from '@mui/material';
import ProfileInfo from './profile-info/profile-info';
import SideSettings from './side-settings/side-settings';
// constants
import { PAGE_ROOT } from '../../constants/styles-constants';
import { Outlet } from 'react-router-dom';

const styles = {
  root: PAGE_ROOT,
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  sideGrid: {
    px: 2,
  },
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12} lg={7} xl={7.5} sx={styles.contentGrid}>
        <ProfileInfo />
        <Outlet />
      </Grid>
      {isLargerAndUpScreen ? (
        <Grid item lg={5} xl={4.5} sx={styles.sideGrid}>
          <SideSettings />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default HomePage;
