// general
import React from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import HomeHeader from './home-header/home-header';
import DateIntervalSelector from './date-interval-selector/date-interval-selector';
// constants
import { PAGE_ROOT } from '../../constants/styles-constants';

const styles = {
  root: PAGE_ROOT,
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  sideGrid: {
    px: 3,
  },
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12} lg={8} xl={8.5} sx={styles.contentGrid}>
        <HomeHeader />
        <DateIntervalSelector />
        <Outlet />
      </Grid>
      {isLargerAndUpScreen ? <Grid item lg={4} xl={3.5} sx={styles.sideGrid}></Grid> : null}
    </Grid>
  );
};

export default HomePage;
