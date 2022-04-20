import { subDays, isBefore, addDays, addWeeks, endOfWeek, startOfWeek } from 'date-fns';

export const buildCalendar = (firstDayOfMonth: Date, lastDayOfMonth: Date) => {
  const calendarStartDay = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const calendarEndDay = endOfWeek(lastDayOfMonth, { weekStartsOn: 1 });
  let day = subDays(calendarStartDay, 1);
  const calendar: Date[][] = [];
  while (isBefore(day, calendarEndDay) && calendar.length < 6) {
    const week = Array(7)
      .fill(0)
      .map((_, index) => addDays(day, index + 1));
    calendar.push(week);
    day = addWeeks(day, 1);
  }

  return calendar;
};
