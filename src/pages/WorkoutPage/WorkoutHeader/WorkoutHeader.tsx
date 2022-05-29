// general
import React, { useState, useEffect, Fragment } from 'react';
// mui & components
import { Grid, Typography, IconButton, Stack, Divider, useTheme } from '@mui/material';
import HeaderTabs from '../../../components/Headers/HeaderTabs/HeaderTabs';
import MoreVertIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getNumberOfSets, getNumberOfExercises } from '../../../services/WorkoutService/WorkoutService';
// constants
import { contentBorderStyle } from '../../../constants/styles';

const tabsArray = [
  { value: 'exercises', label: 'Exercises' },
  { value: 'overview', label: 'Overview' },
];

const styles = {
  root: {
    ...contentBorderStyle,
    overflow: 'hidden',
    height: { xs: 150, md: 150 },
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
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
    <Stack
      sx={{
        ...styles.root,
        backgroundColor: colorTheme === 'neutral' ? `${colorTheme}.main` : `${colorTheme}.main`,
      }}
    >
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
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
          {
            <Typography
              noWrap={true}
              variant='subtitle1'
              sx={{
                fontWeight: 600,
                color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
              }}
            >
              {!currentWorkout ? 'No workout' : 'Custom workout'}
            </Typography>
          }
        </Grid>
        <Grid item xs={6} sx={{ pt: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography
            noWrap={true}
            variant='subtitle2'
            sx={{
              fontWeight: 600,
              mr: 1,
              color: colorTheme === 'neutral' ? 'text.secondary' : `${colorTheme}.contrastText`,
            }}
          >
            {getNumberOfExercises(currentWorkout)}
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
            {getNumberOfSets(currentWorkout)}
          </Typography>
        </Grid>
      </Grid>
      <HeaderTabs tabs={tabsArray} colorTheme={colorTheme} />
    </Stack>
  );
};

export default WorkoutHeader;
