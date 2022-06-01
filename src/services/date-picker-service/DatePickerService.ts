import dayjs from 'dayjs';
import { SelectedDate } from '../../ts/interfaces/SelectedDate';

export const incrementByOneDay = (selectedDate: SelectedDate) => {
  const newDate = { ...selectedDate };
  newDate.value = dayjs(newDate.value).add(1, 'day').toJSON();
  newDate.displayValue = formatDisplayDate(newDate.value);
  return newDate;
};

export const decrementByOneDay = (selectedDate: SelectedDate) => {
  const newDate = { ...selectedDate };
  newDate.value = dayjs(newDate.value).subtract(1, 'day').toJSON();
  newDate.displayValue = formatDisplayDate(newDate.value);
  return newDate;
};

export const formatDisplayDate = (newDateValue: string) => {
  const currentDate = dayjs();
  const tomorrow = dayjs().add(1, 'day');
  const yesterday = dayjs().subtract(1, 'day');

  const selectedDateIsToday = dayjs(newDateValue).isSame(dayjs(currentDate), 'day');
  const selectedDateIsTomorrow = dayjs(newDateValue).isSame(dayjs(tomorrow), 'day');
  const selectedDateIsYesterday = dayjs(newDateValue).isSame(dayjs(yesterday), 'day');

  if (selectedDateIsToday) return 'Today';
  else if (selectedDateIsTomorrow) return 'Tomorrow';
  else if (selectedDateIsYesterday) return 'Yesterday';
  else return dayjs(newDateValue).format('YYYY/MM/DD');
};
