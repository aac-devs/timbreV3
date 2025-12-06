import { IntStateEvent } from "./event.interface";

export const eventAdd = ({ state, event }: IntStateEvent) => {
  // Verificar que no exista ya el evento en el horario seleccionado:
  if (
    state.globe.events.filter(
      (ev) => ev.hour === event.hour && ev.scheduleType === event.scheduleType
    ).length > 0
  )
    return state;

  const events = [...state.globe.events, event];

  events.sort((a, b) => {
    if (a.hour < b.hour) return -1;
    if (a.hour > b.hour) return 1;
    return 0;
  });

  // Guardar evento
  const newState = {
    ...state,
    globe: {
      ...state.globe,
      events,
    },
  };
  return newState;
};
