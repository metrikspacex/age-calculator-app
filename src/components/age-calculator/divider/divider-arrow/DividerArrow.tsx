import clsx from "clsx";
import type { HTMLAttributes } from "react";

type DividerArrowProps = HTMLAttributes<HTMLSpanElement> & {};
export const DividerArrow = ({ className }: DividerArrowProps) => {
  return (
    <div
      className={clsx(
        "grid h-full w-full place-content-center",
        "rounded-[50%] bg-purple",
        className
      )}>
      <img
        alt="arrow pointing down"
        className={clsx(
          "h-[2.4rem] w-[2.4rem]",
          "desktop:h-[4.4rem] desktop:w-[4.4rem]"
        )}
        src="/age-calculator-app/icon-arrow.svg"
      />
    </div>
  );
};
