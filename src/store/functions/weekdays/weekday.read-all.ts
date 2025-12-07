import { IntGetWeekdays } from "../../interfaces/weekday.interface";

export const readWeekdays = ({ get, schedule }: IntGetWeekdays): number[] => {
  const days:
    | "regularDays"
    | "specialDays"
    | "temporaryDays" = `${schedule}Days`;

  return get().globe[days];
};
