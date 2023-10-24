import type {
  AgeCalculatorDay,
  AgeCalculatorMonth,
  AgeCalculatorYear,
} from "@src/types/AgeCalculator";

export const computeAge = (
  day: string,
  month: string,
  year: string
): {
  _days: AgeCalculatorDay;
  _months: AgeCalculatorMonth;
  _years: AgeCalculatorYear;
} => {
  const today = new Date();
  const birthDate = new Date();
  birthDate.setUTCFullYear(Number(year));
  birthDate.setUTCMonth(Number(month) - 1);
  birthDate.setUTCDate(Number(day));

  const yearsLater = new Date(
    `${birthDate.getFullYear() + 1}/${
      birthDate.getMonth() + 1
    }/${birthDate.getDate()}`
  );
  const monthsLater = new Date(
    `${birthDate.getFullYear()}/${
      birthDate.getMonth() + 2
    }/${birthDate.getDate()}`
  );
  const daysLater = new Date(
    `${birthDate.getFullYear()}/${birthDate.getMonth() + 1}/${
      birthDate.getDate() + 1
    }`
  );

  const _years = Math.floor(
    (Number(today) - Number(birthDate)) /
      (Number(yearsLater) - Number(birthDate))
  );
  const _dateMonths =
    (Number(today) - Number(birthDate)) %
    (Number(yearsLater) - Number(birthDate));
  const _months = Math.floor(
    _dateMonths / (Number(monthsLater) - Number(birthDate))
  );
  const _dateDays = _dateMonths % (Number(monthsLater) - Number(birthDate));
  const _days = Math.floor(_dateDays / (Number(daysLater) - Number(birthDate)));

  return {
    _days: _days.toString(),
    _months: _months.toString(),
    _years: _years.toString(),
  };
};
