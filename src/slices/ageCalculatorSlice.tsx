import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AgeCalculatorState } from "@src/types/AgeCalculator";
import { computeAge } from "@src/utilities/computeAge";
import { isValid } from "@src/utilities/isValid";

const initialState: AgeCalculatorState = {
  dayDisplay: null,
  dayInput: null,
  monthDisplay: null,
  monthInput: null,
  yearDisplay: null,
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
        dateTime: string;
        maxLength: number;
        value: string;
      }>
    ) => {
      if (
        isValid(payload.value, payload.dateTime) &&
        payload.value.length <= payload.maxLength
      ) {
        switch (payload.dateTime) {
          case "day":
            state.dayInput = payload.value;
            break;
          case "month":
            state.monthInput = payload.value;
            break;
          case "year":
            state.yearInput = payload.value;
            break;
        }

        const { dayInput, monthInput, yearInput } = state;
        if (dayInput === "") {
          state.dayInput = null;
          state.dayDisplay = null;
          state.monthDisplay = null;
          state.yearDisplay = null;
        } else if (monthInput === "") {
          state.monthInput = null;
          state.dayDisplay = null;
          state.monthDisplay = null;
          state.yearDisplay = null;
        } else if (yearInput === "") {
          state.yearInput = null;
          state.dayDisplay = null;
          state.monthDisplay = null;
          state.yearDisplay = null;
        } else if (
          dayInput !== null &&
          monthInput !== null &&
          yearInput !== null
        ) {
          const { _days, _months, _years } = computeAge(
            dayInput,
            monthInput,
            yearInput
          );
          state.dayDisplay = _days.toString();
          state.monthDisplay = _months.toString();
          state.yearDisplay = _years.toString();
        }
      }
    },
  },
});
export const ageCalculatorActions = ageCalculatorSlice.actions;
export const ageCalculatorReducer = ageCalculatorSlice.reducer;
