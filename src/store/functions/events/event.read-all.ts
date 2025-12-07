import { IntGet } from "../../interfaces/global.interface";

export const eventReadAll = ({ get }: IntGet) => {
  return get().globe.events;
};
