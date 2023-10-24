import clsx from "clsx";
import type { HTMLAttributes } from "react";

type DividerLineProps = HTMLAttributes<HTMLSpanElement> & {};
export const DividerLine = ({ className }: DividerLineProps) => {
  return <span className={clsx("h-[0.2rem] w-full bg-line", className)} />;
};
