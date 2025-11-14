// import { DynamicData } from "./dynamic.interface";

import { GlobalAppState } from "./dynamic.interface";

export const dynamicGlobalState: GlobalAppState = {
  globalState: {
    datos: {
      horarios: {
        regular: {
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
        especial: {
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
        eventual: {
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
      },
      rings: {
        enviado: false,
        entrada: {
          repeticiones: 1,
          alto: 1,
          bajo: 0,
        },
        clase: {
          repeticiones: 1,
          alto: 1,
          bajo: 0,
        },
        descanso: {
          repeticiones: 1,
          alto: 1,
          bajo: 0,
        },
        salida: {
          repeticiones: 1,
          alto: 1,
          bajo: 0,
        },
      },
      reloj: {},
      bateria: {},
    },
    device: {
      registered: false,
      conected: false,
    },
  },
} as const;
