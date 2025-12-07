import { IntState } from "../../interfaces/global.interface";

export const eventEraseAll = ({ state }: IntState) => {
  return {
    ...state,
    globe: {
      ...state.globe,
      events: [],
    },
  };
};
