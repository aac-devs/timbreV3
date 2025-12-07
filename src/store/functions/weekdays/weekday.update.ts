import { IntStateWeekday } from "../../interfaces/weekday.interface";

export const updateWeekday = ({ state, weekday }: IntStateWeekday) => {
  const key = `${weekday.scheduleType}Days`;

  return {
    ...state,
    globe: { ...state.globe, [key]: weekday.valueToUpdate },
  };
};
