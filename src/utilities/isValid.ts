import { isNumeric } from "./isNumeric";

export const isValid = (text: string, dateTime: string) => {
  if (isNumeric(text)) {
    const today = new Date();
    const maxYear = Number(today.getFullYear());
    const validText = Number(text);

    switch (dateTime) {
      case "day":
        if (text === "" || text === "0" || (validText >= 1 && validText <= 31))
          return true;
        return false;
      case "month":
        if (text === "" || text === "0" || (validText >= 1 && validText <= 12))
          return true;
        return false;
      case "year":
        if (text === "" || (validText >= 1 && validText <= maxYear))
          return true;
        return false;
    }
  }
  return false;
};
