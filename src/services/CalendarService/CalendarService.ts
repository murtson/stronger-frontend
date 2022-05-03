import {
  subDays,
  isBefore,
  addDays,
  addWeeks,
  endOfWeek,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  formatISO,
  addMonths,
  subMonths,
  parseISO,
} from 'date-fns';

import { Week, Calendar } from '../../ts/types/Calendar';

export const buildCalendar = (date: string) => {
  const calendarStartDay = getCalendarStartDate(date);
  const calendarEndDay = getCalendareEndDate(date);
  let day = subDays(calendarStartDay, 1);
  const calendar: string[][] = [];
  while (isBefore(day, calendarEndDay) && calendar.length < 6) {
    const week = Array(7)
      .fill(0)
      .map((_, index) => formatISO(addDays(day, index + 1), { representation: 'date' })) as Week;
    calendar.push(week);
    day = addWeeks(day, 1);
  }

  return calendar as Calendar;
};

export const increaseByOneMonth = (date: string) => {
  const dateFormat = parseISO(date);
  const nextMonthDate = addMonths(dateFormat, 1);
  return formatISO(nextMonthDate);
};

export const decreaseByOneMonth = (date: string) => {
  const dateFormat = parseISO(date);
  const previousMonthDate = subMonths(dateFormat, 1);
  return formatISO(previousMonthDate);
};

export const getCalendarStartDate = (date: string) => {
  const dateFormat = parseISO(date);
  const monthStart = startOfMonth(dateFormat);
  const calendarStartDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  return calendarStartDate;
};

export const getCalendareEndDate = (date: string) => {
  const dateFormat = parseISO(date);
  const monthEnd = endOfMonth(dateFormat);
  const calendarEndDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  return calendarEndDate;
};
