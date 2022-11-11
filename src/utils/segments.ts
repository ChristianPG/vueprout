export const getReadableStops = (numberOfLayovers: number) => {
  return numberOfLayovers > 0
    ? `${numberOfLayovers} stop${numberOfLayovers > 1 ? "s" : ""}`
    : "nonstop";
};
