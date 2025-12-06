import { IntGet } from "./event.interface";

export const eventReadAll = ({ get }: IntGet) => {
  return get().globe.events;
};
