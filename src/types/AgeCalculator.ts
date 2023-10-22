export type AgeCalculatorAge = string | null;
export type AgeCalculatorDateTime = "day" | "month" | "year";
export type AgeCalculatorDay = string | null;
export type AgeCalculatorMonth = string | null;
export type AgeCalculatorYear = string | null;

export type AgeCalculatorState = {
  dayDisplay: AgeCalculatorDay;
  dayInput: AgeCalculatorDay;
  monthDisplay: AgeCalculatorMonth;
  monthInput: AgeCalculatorMonth;
  yearDisplay: AgeCalculatorYear;
  yearInput: AgeCalculatorYear;
};
