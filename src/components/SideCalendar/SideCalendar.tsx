import React from 'react';

// Mui
import { Box, Typography, IconButton, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// services & libs
import { getWorkoutExerciseCategories } from '../../services/WorkoutService/WorkoutService';
import { format, isBefore, isAfter, isSameDay, parseISO } from 'date-fns';

// redux
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import {
  incrementCalendarMonth,
  decrementCalendarMonth,
  getWorkoutsFromCalendarDates,
} from '../../redux/slices/calendarSlice';
import { setSelectedDate } from '../../redux/slices/workoutSlice';

const styles = {
  root: {
    backgroundColor: 'white',
    boxSizing: 'border-box',
    pb: { md: 1, xl: 3 },
    pt: { md: 1, xl: 2 },
    px: { xs: 1, xl: 3 },
    borderRadius: 2,
    boxShadow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 1.5,
  },
  weekRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 1,
  },
  dayAndCategoriesContainer: {
    userSelect: 'none',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0.5,
  },
  dayContainer: {
    cursor: 'pointer',
    borderStyle: 'solid',
    borderWidth: 2,
    boxSizing: 'box-fit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    borderRadius: 2,
  },
  categoriesContainer: {
    height: 10,
    display: 'flex',
    gap: '3px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const currentDate = new Date();

const SideCalendar: React.FC = () => {
  const { selectedDate } = useSelector((state: RootState) => state.workout);
  const {
    calendarWorkouts,
    currentCalendar: { calendar, month, firstDayOfMonth, lastDayOfMonth },
  } = useSelector((state: RootState) => state.calendar);
  const dispatch = useAppDispatch();

  const handleDateSelect = (date: string) => {
    dispatch(setSelectedDate(date));
  };

  const handleNextMonthClick = () => {
    dispatch(incrementCalendarMonth());
    dispatch(getWorkoutsFromCalendarDates());
  };

  const handlePreviousMonthClick = () => {
    dispatch(decrementCalendarMonth());
    dispatch(getWorkoutsFromCalendarDates());
  };

  const renderWorkoutCategories = (date: string) => {
    if (calendarWorkouts.length < 1) return;
    const workout = calendarWorkouts.find((workout) =>
      isSameDay(parseISO(workout.time.createdAt), parseISO(date))
    );
    if (!workout) return null;
    const exerciseCategories = getWorkoutExerciseCategories(workout);
    return exerciseCategories.map((category) => (
      <Box
        key={category.id}
        sx={{ width: 5, height: 5, borderRadius: 2, backgroundColor: category.color }}
      ></Box>
    ));
  };

  const getHoverColor = (day: string) => {
    return isSameDay(parseISO(day), currentDate) ? 'primary.dark' : 'neutral.main';
  };

  const getBgColor = (day: string) => {
    return isSameDay(parseISO(day), currentDate) ? 'primary.main' : 'none';
  };

  const getBorderColor = (day: string) => {
    const isSameAsSelectedDate = isSameDay(parseISO(day), parseISO(selectedDate.value));
    const isSameAsCurrentDate = isSameDay(parseISO(day), currentDate);
    return isSameAsSelectedDate || isSameAsCurrentDate ? 'primary.main' : 'transparent';
  };

  const getTextColor = (day: string) => {
    const isNotWithinMonth =
      isBefore(parseISO(day), parseISO(firstDayOfMonth)) ||
      isAfter(parseISO(day), parseISO(lastDayOfMonth));
    const isSameAsCurrentDate = isSameDay(parseISO(day), currentDate);
    if (isSameAsCurrentDate) return '#ffffff';
    else if (isNotWithinMonth) return 'neutral.dark';
    else return 'text.primary';
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <IconButton onClick={handlePreviousMonthClick}>
          <NavigateBeforeIcon />
        </IconButton>
        <Typography variant='subtitle1' align='center'>
          {format(parseISO(month), 'MMMM u')}
        </Typography>
        <IconButton onClick={handleNextMonthClick}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
      <Stack spacing={1} sx={{ borderRadius: 2, px: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {weekDays.map((day) => (
            <Typography
              key={day}
              variant='subtitle2'
              textAlign={'center'}
              sx={{ color: 'text.secondary', flex: 1, fontWeight: 600 }}
            >
              {day}
            </Typography>
          ))}
        </Box>
        {calendar.map((week, weekIndex) => (
          <Box key={weekIndex} sx={styles.weekRow}>
            {week.map((day, dayIndex) => (
              <Box key={dayIndex} sx={styles.dayAndCategoriesContainer}>
                <Box
                  onClick={() => handleDateSelect(day)}
                  sx={{
                    ...styles.dayContainer,
                    bgcolor: getBgColor(day),
                    borderColor: getBorderColor(day),
                    '&:hover': {
                      bgcolor: getHoverColor(day),
                    },
                  }}
                >
                  <Typography variant='subtitle2' sx={{ color: getTextColor(day) }}>
                    {format(parseISO(day), 'd')}
                  </Typography>
                </Box>
                <Box sx={styles.categoriesContainer}>{renderWorkoutCategories(day)}</Box>
              </Box>
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SideCalendar;
