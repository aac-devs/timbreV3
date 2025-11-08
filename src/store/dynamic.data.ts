import { DynamicData } from "./dynamic.interface";

export const dynamicInitialState: DynamicData = {
  datos: {
    horarios: {
      regular: {
        guardado: false,
        enviado: false,
        dias: {
          domingo: false,
          lunes: false,
          martes: false,
          miercoles: false,
          jueves: false,
          viernes: false,
          sabado: false,
        },
        horaTimbre: [],
      },
      especial: {
        guardado: false,
        enviado: false,
        dias: {
          domingo: false,
          lunes: false,
          martes: false,
          miercoles: false,
          jueves: false,
          viernes: false,
          sabado: false,
        },
        horaTimbre: [],
      },
      eventual: {
        guardado: false,
        enviado: false,
        dias: {
          domingo: false,
          lunes: false,
          martes: false,
          miercoles: false,
          jueves: false,
          viernes: false,
          sabado: false,
        },
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
};
