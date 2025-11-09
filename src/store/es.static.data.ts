import { StaticSpanishData } from "./es.static.interface";

export const spanishData: StaticSpanishData = {
  home: {},
  horarios: {
    diasSemana: {
      titulo: "Días de activación de horario",
      labels: ["D", "L", "M", "X", "J", "V", "S"],
    },
    regular: {},
    especial: {},
    eventual: {},
  },
  rings: {},
  reloj: {},
  bateria: {},
};

// * Se copian los textos de español a inglés provisionalmente:
export const englishData: StaticSpanishData = {
  ...spanishData,
  horarios: {
    diasSemana: {
      titulo: "Schedule activation days",
      labels: ["S", "M", "T", "W", "T", "F", "S"],
    },
    regular: {},
    especial: {},
    eventual: {},
  },
};
