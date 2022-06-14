// general
import React, { useState, useEffect } from 'react';
// mui & components
import { Grid, Typography, IconButton, Stack, useTheme, Box } from '@mui/material';
import HeaderTabs from '../../../components/headers/header-tabs/header-tabs';
import MoreVertIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SingleBedIcon from '@mui/icons-material/SingleBed';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getNumberOfSets, getNumberOfExercises } from '../../../services/workout-service/workout-service';

const tabsArray = [
  { value: 'exercises', label: 'Exercises' },
  { value: 'overview', label: 'Overview' },
];

const styles = {
  root: {
    height: 152,
    justifyContent: 'space-between',
  },
  gridContainer: {
    pl: 2,
    pr: 1.5,
    pt: 1,
  },
  statusIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreOptionsGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

const WorkoutHeader: React.FC = () => {
  const [colorTheme, setColorTheme] = useState<'success' | 'primary' | 'secondary'>('secondary');
  const [statusText, setStatustext] = useState<'completed' | 'in progress' | 'rest day'>('rest day');
  const { currentWorkout, loading } = useSelector((state: RootState) => state.workout);
  const theme = useTheme();

  useEffect(() => {
    if (!currentWorkout) {
      setColorTheme('secondary');
      setStatustext('rest day');
    } else if (currentWorkout.isCompleted) {
      setColorTheme('success');
      setStatustext('completed');
    } else {
      setColorTheme('primary');
      setStatustext('in progress');
    }
  }, [currentWorkout]);

  const renderStatusIcon = () => {
    if (!currentWorkout) {
      return <SingleBedIcon sx={{ color: `${colorTheme}.contrastText`, mr: 0.5 }} />;
    } else if (currentWorkout.isCompleted) {
      return <CheckIcon sx={{ color: `${colorTheme}.contrastText`, mr: 0.5 }} />;
    } else {
      return <WhatshotIcon sx={{ color: `${colorTheme}.contrastText`, mr: 0.5 }} />;
    }
  };

  return (
    <Stack
      sx={{
        ...styles.root,
        backgroundColor: `${colorTheme}.main`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        borderTop: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
      }}
    >
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={styles.statusIconContainer}>
            {renderStatusIcon()}
            <Typography
              variant='subtitle2'
              sx={{ color: `${colorTheme}.contrastText`, fontWeight: 500, mr: 1 }}
            >
              {statusText}
            </Typography>
            <Typography sx={{ color: `${colorTheme}.contrastText`, fontWeight: 500, mr: 1 }}>•</Typography>
          </Box>
          <Typography
            noWrap={true}
            variant='subtitle2'
            sx={{ color: `${colorTheme}.contrastText`, fontWeight: 500, mr: 1 }}
          >
            {getNumberOfExercises(currentWorkout)}
          </Typography>
          <Typography sx={{ color: `${colorTheme}.contrastText`, fontWeight: 500, mr: 1 }}>•</Typography>
          <Typography
            noWrap={true}
            variant='subtitle2'
            sx={{ fontWeight: 500, color: `${colorTheme}.contrastText` }}
          >
            {getNumberOfSets(currentWorkout)}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={styles.moreOptionsGrid}>
          <IconButton disabled={loading}>
            <MoreVertIcon sx={{ color: `${colorTheme}.contrastText` }} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sx={{ pt: 1 }}>
          <Typography
            noWrap={true}
            variant='subtitle1'
            sx={{ fontWeight: 600, color: `${colorTheme}.contrastText` }}
          >
            {!currentWorkout ? '' : 'Chest & Shoulders'}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ pt: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography
            noWrap={true}
            variant='subtitle1'
            sx={{ fontWeight: 600, color: `${colorTheme}.contrastText` }}
          >
            {!currentWorkout ? '' : '00:00'}
          </Typography>
        </Grid>
      </Grid>
      <HeaderTabs tabs={tabsArray} colorTheme={colorTheme} />
    </Stack>
  );
};

export default WorkoutHeader;
