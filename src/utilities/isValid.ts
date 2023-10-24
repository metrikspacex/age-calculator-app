const isValidDay = (date: string) => {
  if (date.length !== 2) return false;
  const _date = Number(date);
  return Boolean(_date >= 1 && _date <= 31);
};

const isValidMonth = (date: string) => {
  if (date.length !== 2) return false;
  return Boolean(Number(date) >= 1 && Number(date) <= 12);
};

const isValidYear = (date: string) => {
  if (date.length !== 4) return false;
  const maxYear = Number(new Date().getFullYear());
  const _date = Number(date);
  return Boolean(_date >= 1 && _date <= maxYear);
};

export const isValid = (date: string, dateTime: string, maxLength: number) => {
  if (date.length <= maxLength) {
    switch (dateTime) {
      case "day":
        if (isValidDay(date)) return true;
        return false;
      case "month":
        if (isValidMonth(date)) return true;
        return false;
      case "year":
        if (isValidYear(date)) return true;
        return false;
    }
  }
  return false;
};
