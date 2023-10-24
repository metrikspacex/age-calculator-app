export type AgeCalculatorAge = string | null;
export type AgeCalculatorDateTime = "day" | "month" | "year";
export type AgeCalculatorDay = string | null;
export type AgeCalculatorMonth = string | null;
export type AgeCalculatorYear = string | null;

export type AgeCalculatorState = {
  dayDisplay: AgeCalculatorDay;
  dayError: boolean;
  dayInput: AgeCalculatorDay;
  error?: boolean;
  monthDisplay: AgeCalculatorMonth;
  monthError: boolean;
  monthInput: AgeCalculatorMonth;
  yearDisplay: AgeCalculatorYear;
  yearError: boolean;
  yearInput: AgeCalculatorYear;
};
