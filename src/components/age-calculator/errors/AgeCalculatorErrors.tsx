import clsx from "clsx";
import type { HTMLAttributes } from "react";

import { useAppSelector } from "@hooks/useAppSelector";

type AgeCalculatorErrorsProp = HTMLAttributes<HTMLDivElement> & {};
export const AgeCalculatorErrors = ({ className }: AgeCalculatorErrorsProp) => {
  const { dayError, monthError, yearError } = useAppSelector(
    (state) => state.age_calculator_slice
  );
  return (
    <div
      className={clsx(
        "grid grid-cols-[repeat(3,1fr)] grid-rows-[1fr] gap-x-[1.6rem]",
        "bg-white",
        "desktop:grid-cols-[repeat(3,16rem)] desktop:gap-x-[3.2rem]",
        className
      )}>
      {dayError ? <p className={clsx("col-1 row-1")}>error</p> : null}
      {monthError ? <p className={clsx("col-2 row-1")}>error</p> : null}
      {yearError ? <p className={clsx("col-3 row-1")}>error</p> : null}
    </div>
  );
};
