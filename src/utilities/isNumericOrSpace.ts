export const isNumericOrSpace = (date: string) => {
  return (
    !Number.isNaN(Number(date)) &&
    Number.isFinite(Number(date)) &&
    !/e/iu.test(date)
  );
};
