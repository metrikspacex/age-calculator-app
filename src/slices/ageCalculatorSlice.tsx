import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AgeCalculatorState } from "@src/types/AgeCalculator";
import { computeAge } from "@src/utilities/computeAge";
import { isNumericOrSpace } from "@src/utilities/isNumericOrSpace";
import { isValid } from "@src/utilities/isValid";

const initialState: AgeCalculatorState = {
  dayDisplay: null,
  dayError: false,
  dayInput: null,
  monthDisplay: null,
  monthError: false,
  monthInput: null,
  yearDisplay: null,
  yearError: false,
  yearInput: null,
};

export const AGE_CALCULATOR_SLICE = "age_calculator_slice";
export const ageCalculatorSlice = createSlice({
  initialState,
  name: AGE_CALCULATOR_SLICE,
  reducers: {
    setAgeCalculator: (
      state,
      {
        payload,
      }: PayloadAction<{
        date: string;
        dateTime: string;
        maxLength: number;
      }>
    ) => {
      switch (payload.dateTime) {
        case "day":
          state.dayError = !isValid(
            payload.date,
            payload.dateTime,
            payload.maxLength
          );
          if (isNumericOrSpace(payload.date)) state.dayInput = payload.date;
          break;
        case "month":
          state.monthError = !isValid(
            payload.date,
            payload.dateTime,
            payload.maxLength
          );
          if (isNumericOrSpace(payload.date)) state.monthInput = payload.date;
          break;
        case "year":
          state.yearError = !isValid(
            payload.date,
            payload.dateTime,
            payload.maxLength
          );
          if (isNumericOrSpace(payload.date)) state.yearInput = payload.date;
          break;
      }

      if (
        !state.dayError &&
        state.dayInput !== null &&
        !state.monthError &&
        state.monthInput !== null &&
        !state.yearError &&
        state.yearInput !== null
      ) {
        const { _days, _months, _years } = computeAge(
          state.dayInput,
          state.monthInput,
          state.yearInput
        );
        state.dayDisplay = _days;
        state.monthDisplay = _months;
        state.yearDisplay = _years;
      }
    },
  },
});
export const ageCalculatorActions = ageCalculatorSlice.actions;
export const ageCalculatorReducer = ageCalculatorSlice.reducer;
