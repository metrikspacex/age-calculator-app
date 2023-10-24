import clsx from "clsx";
import type { HTMLAttributes } from "react";

import { useAppSelector } from "@hooks/useAppSelector";

import { AgeCalculatorDisplay } from "./AgeCalculatorDisplay";

type AgeCalculatorDisplaysProps = HTMLAttributes<HTMLDivElement> & {};
export const AgeCalculatorDisplays = ({
  className,
}: AgeCalculatorDisplaysProps) => {
  const { dayDisplay, monthDisplay, yearDisplay } = useAppSelector(
    (state) => state.age_calculator_slice
  );
  return (
    <div
      className={clsx(
        "grid grid-cols-[1fr] grid-rows-[repeat(3,1fr)] bg-white",
        className
      )}>
      <AgeCalculatorDisplay age={yearDisplay} ageIn="year" />
      <AgeCalculatorDisplay age={monthDisplay} ageIn="month" />
      <AgeCalculatorDisplay age={dayDisplay} ageIn="day" />
    </div>
  );
};
