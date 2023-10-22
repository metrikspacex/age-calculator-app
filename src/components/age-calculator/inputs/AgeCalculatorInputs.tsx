import clsx from "clsx";
import type { HTMLAttributes } from "react";

import { AgeCalculatorInput } from "./AgeCalculatorInput";

type AgeCalculatorInputsProp = HTMLAttributes<HTMLDivElement> & {};
export const AgeCalculatorInputs = ({ className }: AgeCalculatorInputsProp) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[repeat(3,1fr)] grid-rows-[1fr] gap-x-[1.6rem]",
        "bg-white",
        "desktop:grid-cols-[repeat(3,16rem)] desktop:gap-x-[3.2rem]",
        className
      )}>
      <AgeCalculatorInput className={clsx("col-1 row-1")} dateTime="day" />
      <AgeCalculatorInput className={clsx("col-2 row-1")} dateTime="month" />
      <AgeCalculatorInput className={clsx("col-3 row-1")} dateTime="year" />
    </div>
  );
};
