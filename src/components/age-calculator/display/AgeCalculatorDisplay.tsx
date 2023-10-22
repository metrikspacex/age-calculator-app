import clsx from "clsx";
import type { HTMLAttributes } from "react";

import type {
  AgeCalculatorAge,
  AgeCalculatorDateTime,
} from "@src/types/AgeCalculator";

type AgeCalculatorDisplayProps = HTMLAttributes<HTMLDivElement> & {
  readonly age: AgeCalculatorAge;
  readonly ageIn: AgeCalculatorDateTime;
};
export const AgeCalculatorDisplay = ({
  age,
  ageIn,
  className,
}: AgeCalculatorDisplayProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[min-content_1fr] grid-rows-[1fr] gap-[0.8rem]",
        "bg-white font-primary text-[5.6rem] font-extrabold italic",
        "leading-[6.16rem] tracking-[-1.12px]",
        "desktop:grid-cols-[13.8rem_1fr] desktop:text-[10.4rem]",
        "desktop:leading-[11.44rem] desktop:tracking-[-2.08px]",
        className
      )}>
      <h1 className={clsx("text-purple")}>{age ?? "-\u00A0-"}</h1>
      <h2 className={clsx("text-black")}>{ageIn}</h2>
    </div>
  );
};
