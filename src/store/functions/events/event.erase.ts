import { IntStateEvent } from "../../interfaces/event.interface";

// ? FUNCIÓN LISTA
export const eventErase = ({ state, event }: IntStateEvent) => {
  const { hour, scheduleType: type } = event;

  return {
    ...state,
    globe: {
      ...state.globe,
      events: [
        ...state.globe.events.filter((ev) => {
          if (!(ev.hour === hour && ev.scheduleType === type)) return ev;
        }),
      ],
    },
  };
};
