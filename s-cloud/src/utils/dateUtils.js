import { startOfQuarter, addMonths, endOfQuarter } from "date-fns";

export const getQuarterDates = (date) => {
  const quarterStart = startOfQuarter(date);
  const quarterEnd = endOfQuarter(date);
  const quarterMiddle = addMonths(quarterStart, 1);

  return [quarterStart, quarterMiddle, quarterEnd];
};

export const getWeeksInMonth = (quarter) => {
  const quarterStart = quarter[0];
  const quarterEnd = quarter[2];

  const weeks = [];
  let currentWeek = [];
  let currentDay = quarterStart;

  while (currentDay <= quarterEnd) {
    currentWeek.push(new Date(currentDay));
    if (
      currentWeek.length === 7 ||
      currentDay.getMonth() !== quarterStart.getMonth()
    ) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return weeks;
};
