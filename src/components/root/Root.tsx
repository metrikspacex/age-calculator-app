import clsx from "clsx";

import { AgeCalculator } from "@components/age-calculator/AgeCalculator";

export const Root = () => {
  return (
    <main
      className={clsx("grid min-h-screen place-content-center bg-light-grey")}>
      <AgeCalculator />
    </main>
  );
};
