import clsx from "clsx";
import type { ChangeEvent, HTMLAttributes } from "react";
import { useMemo } from "react";

import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { ageCalculatorActions } from "@slices/ageCalculatorSlice";
import type { AgeCalculatorDateTime } from "@src/types/AgeCalculator";

type AgeCalculatorInputProp = HTMLAttributes<HTMLDivElement> & {
  readonly dateTime: AgeCalculatorDateTime;
};
export const AgeCalculatorInput = ({
  className,
  dateTime,
}: AgeCalculatorInputProp) => {
  const { dayInput, monthInput, yearInput } = useAppSelector(
    (state) => state.age_calculator_slice
  );
  const dispatch = useAppDispatch();

  const { maxLength, placeholder, value } = useMemo(() => {
    switch (dateTime) {
      case "day":
        return { maxLength: 2, placeholder: "DD", value: dayInput ?? "" };
      case "month":
        return { maxLength: 2, placeholder: "MM", value: monthInput ?? "" };
      case "year":
        return { maxLength: 4, placeholder: "YYYY", value: yearInput ?? "" };
    }
  }, [dateTime, dayInput, monthInput, yearInput]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    dispatch(
      ageCalculatorActions.setAgeCalculator({
        date,
        dateTime,
        maxLength,
      })
    );
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-[1fr] grid-rows-[min-content_1fr] justify-between",
        "bg-white",
        className
      )}
      key={dateTime}>
      <label
        className={clsx(
          "col-1 row-1 h-full w-full bg-white font-primary text-[1.2rem]",
          "font-bold uppercase not-italic leading-normalize",
          "tracking-[0.3rem] text-grey",
          "desktop:text-[1.4rem] desktop:tracking-[0.35rem]"
        )}
        htmlFor={dateTime}>
        {dateTime}
      </label>
      <input
        className={clsx(
          "remove-arrow col-1 row-2 h-full w-full rounded-[0.8rem]",
          "border-[0.1rem] border-solid border-line bg-white px-[1.6rem]",
          "py-[1.2rem] font-primary text-[2rem] font-bold not-italic",
          "leading-normalize tracking-[0.2px] text-black outline-none",
          "desktop:text-[3.2rem] desktop:tracking-[0.32px]"
        )}
        maxLength={maxLength}
        name={dateTime}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
