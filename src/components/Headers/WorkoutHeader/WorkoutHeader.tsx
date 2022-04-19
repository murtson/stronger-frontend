import React, { useState, useEffect, Fragment } from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Divider,
  Skeleton,
  LinearProgress,
} from '@mui/material';
import HeaderTabs from '../HeaderTabs/HeaderTabs';
import MoreVertIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  getNumberOfSets,
  getNumberOfExercises,
} from '../../../services/WorkoutService/WorkoutService';
import { useTheme } from '@mui/material';

const tabsArray = [
  { value: 'exercises', label: 'Exercises' },
  { value: 'overview', label: 'Overview' },
];

const styles = {
  root: {
    overflow: 'hidden',
    height: { xs: 150, md: 150 },
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: { xs: 0, md: 2 },
    borderWidth: { xs: 0, md: 0 },
    borderColor: 'divider',
    borderStyle: 'solid',
    boxShadow: { xs: 'none', md: 1 },
  },
  gridContainer: {
    pl: 2,
    pr: 1.5,
    pt: 1,
  },
  moreOptionsGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

const WorkoutHeader: React.FC = () => {
  const [colorTheme, setColorTheme] = useState<'success' | 'primary' | 'neutral'>('neutral');
  const [statusText, setStatustext] = useState<'completed' | 'in progress' | ''>('');
  const { currentWorkout, loading } = useSelector((state: RootState) => state.workout);
  const theme = useTheme();

  useEffect(() => {
    if (!currentWorkout) {
      setColorTheme('neutral');
      setStatustext('');
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
      return <CircleOutlinedIcon sx={{ color: `text.secondary`, mr: 0.5 }} />;
    } else if (currentWorkout.isCompleted) {
      return <CheckCircleOutlineIcon sx={{ color: `success.contrastText`, mr: 0.5 }} />;
    } else {
      return <AdjustIcon sx={{ color: `primary.contrastText`, mr: 0.5 }} />;
    }
  };

  return (
    <Fragment>
      <Stack
        sx={{
          ...styles.root,
          backgroundColor: colorTheme === 'neutral' ? `${colorTheme}.main` : `${colorTheme}.main`,
        }}
      >
        <Grid container sx={styles.gridContainer}>
          <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
            {loading ? (
              <Skeleton
                variant='circular'
                animation='wave'
                sx={{ bgcolor: `${colorTheme}.dark`, width: 20, height: 20 }}
              />
            ) : (
              <Fragment>
                {renderStatusIcon()}
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: `${colorTheme}.contrastText`,
                    fontWeight: 600,
                  }}
                >
                  {statusText}
                </Typography>
              </Fragment>
            )}
          </Grid>
          <Grid item xs={2} sx={styles.moreOptionsGrid}>
            <IconButton disabled={loading}>
              <MoreVertIcon
                sx={{
                  color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{ pt: 1 }}>
            {loading ? (
              <Skeleton
                variant='rectangular'
                animation='wave'
                sx={{ borderRadius: 1, width: 150, height: 18, bgcolor: `${colorTheme}.dark` }}
              />
            ) : (
              <Typography
                noWrap={true}
                variant='subtitle1'
                sx={{
                  fontWeight: 600,
                  color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
                }}
              >
                {!currentWorkout ? 'No Workout' : 'Custom Workout'}
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ pt: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Typography
              noWrap={true}
              variant='subtitle2'
              sx={{
                fontWeight: 600,
                mr: 1,
                color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
              }}
            >
              {loading ? (
                <Skeleton variant='text' width={60} animation='wave' />
              ) : (
                getNumberOfExercises(currentWorkout)
              )}
            </Typography>

            <Typography
              noWrap={true}
              variant='subtitle2'
              sx={{
                fontWeight: 600,
                pr: 1,
                color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
              }}
            >
              {loading ? (
                <Skeleton variant='text' animation='wave' width={60} />
              ) : (
                getNumberOfSets(currentWorkout)
              )}
            </Typography>
          </Grid>
        </Grid>
        <HeaderTabs tabs={tabsArray} colorTheme={colorTheme} />
      </Stack>

      <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
    </Fragment>
  );
};

export default WorkoutHeader;
