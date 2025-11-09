// import { DynamicData } from "./dynamic.interface";

import { GlobalAppState } from "./dynamic.interface";

export const dynamicGlobalState: GlobalAppState = {
  globalState: {
    datos: {
      horarios: {
        regular: {
          guardado: false,
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
        especial: {
          guardado: false,
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
        eventual: {
          guardado: false,
          enviado: false,
          dias: [],
          horaTimbre: [],
        },
      },
      rings: {
        guardado: false,
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
