import clsx from "clsx";
import type { FormEvent } from "react";

import { AgeCalculatorDisplays } from "./display/AgeCalculatorDisplays";
import { Divider } from "./divider/Divider";
import { AgeCalculatorInputs } from "./inputs/AgeCalculatorInputs";

export const AgeCalculator = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className={clsx(
        "grid w-[34.3rem] max-w-[34.3rem] grid-cols-[1fr]",
        "grid-rows-[7.6rem_6.4rem_18.6rem] gap-y-[3.2rem]",
        "rounded-[2.4rem_2.4rem_10rem_2.4rem] bg-white px-[2.4rem] py-[4.8rem]",
        "desktop:w-[84rem] desktop:max-w-[84rem] desktop:grid-cols-[1fr]",
        "desktop:grid-rows-[10.1rem_9.6rem_34.2rem] desktop:gap-y-0",
        "desktop:rounded-[2.4rem_2.4rem_20rem_2.4rem] desktop:p-[5.6rem]"
      )}
      onSubmit={handleSubmit}>
      <AgeCalculatorInputs className={clsx("col-1 row-1")} />
      <Divider className={clsx("col-1 row-2")} />
      <AgeCalculatorDisplays className={clsx("col-1 row-3")} />
    </form>
  );
};
