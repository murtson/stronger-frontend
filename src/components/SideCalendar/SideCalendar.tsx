import { Box, Typography, IconButton, Paper, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { useState, useEffect } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  subDays,
  addDays,
  isBefore,
  addWeeks,
  isEqual,
  isAfter,
  formatISO,
  isSameDay,
  parseISO,
  getMonth,
  addMonths,
  subMonths,
} from 'date-fns';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { buildCalendar } from '../../services/CalendarService/CalendarService';

const styles = {
  root: {
    backgroundColor: 'white',
    boxSizing: 'border-box',
    pt: 1.5,
    pb: 3,
    px: 1,
    borderRadius: 2,
    boxShadow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 1.5,
  },
};

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const currentDate = new Date();

const SideCalendar: React.FC = () => {
  const [calendar, setCalendar] = useState<Date[][]>([]);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(startOfMonth(new Date()));
  const [lastDayOfMonth, setLastDayOfMonth] = useState(endOfMonth(new Date()));
  const [month, setMonth] = useState(new Date());
  const { selectedDate } = useSelector((state: RootState) => state.workout);

  const handleNextMonth = () => {
    const nextMonth = addMonths(month, 1);
    setMonth(nextMonth);
    setFirstDayOfMonth(startOfMonth(nextMonth));
    setLastDayOfMonth(endOfMonth(nextMonth));
  };

  const handlePreviousMonth = () => {
    const previousMonth = subMonths(month, 1);
    setMonth(previousMonth);
    setFirstDayOfMonth(startOfMonth(previousMonth));
    setLastDayOfMonth(endOfMonth(previousMonth));
  };

  useEffect(() => {
    const updatedCalendar = buildCalendar(firstDayOfMonth, lastDayOfMonth);
    setCalendar(updatedCalendar);
  }, [firstDayOfMonth, lastDayOfMonth]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <IconButton onClick={handlePreviousMonth}>
          <NavigateBeforeIcon />
        </IconButton>
        <Typography variant='subtitle1' align='center'>
          {format(month, 'MMMM u')}
        </Typography>
        <IconButton onClick={handleNextMonth}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
      <Stack spacing={2} sx={{ borderRadius: 2, px: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {weekDays.map((day) => (
            <Typography
              key={day}
              variant='subtitle2'
              textAlign={'center'}
              sx={{ color: 'text.secondary', flex: 1 }}
            >
              {day}
            </Typography>
          ))}
        </Box>
        {calendar.map((week, weekIndex) => (
          <Box
            key={weekIndex}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
            }}
          >
            {week.map((day, dayIndex) => (
              <Box key={dayIndex} sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: isSameDay(day, currentDate) ? 'primary.dark' : 'neutral.main',
                    },
                    bgcolor: isSameDay(day, currentDate) ? 'primary.main' : 'none',
                    borderStyle: 'solid',
                    borderWidth: 2,
                    boxSizing: 'box-fit',
                    borderColor:
                      isSameDay(day, parseISO(selectedDate.value)) || isSameDay(day, currentDate)
                        ? 'primary.main'
                        : 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 26,
                    height: 26,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant='subtitle2'
                    sx={{
                      color: isSameDay(day, currentDate)
                        ? '#ffffff'
                        : isBefore(day, firstDayOfMonth) || isAfter(day, lastDayOfMonth)
                        ? 'neutral.dark'
                        : 'text.primary',
                    }}
                  >
                    {format(day, 'd')}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SideCalendar;
