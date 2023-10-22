import clsx from "clsx";
import type { HTMLAttributes } from "react";

import { DividerArrow } from "./divider-arrow/DividerArrow";
import { DividerLine } from "./divider-line/DividerLine";

type DividerProps = HTMLAttributes<HTMLDivElement> & {};
export const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[1fr_6.4rem_1fr] grid-rows-[1fr] items-center bg-white",
        "desktop:grid-cols-[1fr_1fr_9.6rem]",
        className
      )}>
      <DividerLine className={clsx("col-1 row-1", "desktop:col-1")} />
      <DividerArrow className={clsx("col-2 row-1", "desktop:col-3")} />
      <DividerLine className={clsx("col-3 row-1", "desktop:col-2")} />
    </div>
  );
};
