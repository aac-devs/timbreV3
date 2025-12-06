import { IntStateEvent } from "./event.interface";

// ? FUNCIÓN LISTA
export const eventErase = (props: IntStateEvent) => {
  const { state, event } = props;

  return {
    ...state,
    globe: {
      ...state.globe,
      events: [
        ...state.globe.events.filter((ev) => {
          if (
            !(ev.hour === event.hour && ev.scheduleType === event.scheduleType)
          )
            return ev;
        }),
      ],
    },
  };
};
