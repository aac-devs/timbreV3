import { IntGetEvent } from "./event.interface";

// ? FUNCIÓN LISTA:
export const eventExistsHour = (props: IntGetEvent) => {
  const { get, event } = props;

  return (
    get().globe.events.filter(
      (ev) => ev.hour === event.hour && ev.scheduleType === event.scheduleType
    ).length > 0
  );
};
