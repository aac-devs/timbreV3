import { create } from "zustand";
// import { GlobalAppStore } from "./dynamic.interface";
import { createJSONStorage, persist } from "zustand/middleware";
// import { dynamicGlobalState } from "./dynamic.data";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {
//   actualizarDiaSemana,
//   DiaSemanaProps,
//   leerDiasSemana,
// } from "./functions/diasSemana";
import { dynGlobalStore } from "./dyn.data";
import { eventAdd } from "./functions/events/event.add";
import { eventReadAll } from "./functions/events/event.read-all";
import { eventEraseAll } from "./functions/events/event.erase-all";
import { eventErase } from "./functions/events/event.erase";
import { eventExistsHour } from "./functions/events/event.exist-hour";
import { GlobalStore } from "./interfaces/store.interface";
import { EnumWeekday, IntWeekday } from "./interfaces/weekday.interface";
import { readWeekdays } from "./functions/weekdays/weekday.read-all";
import { updateWeekday } from "./functions/weekdays/weekday.update";
import { IntEvent, TypeSchedule } from "./interfaces/event.interface";

// export const useDynamicData = create<GlobalAppStore>()(
//   persist(
//     (set, get) => ({
//       ...dynamicGlobalState,

//       // ? Acción que actualiza el estado (on/off) el botón del día de la semana al hacer clic en él:
//       actualizarDiaSemana: ({ horario, newValue }: DiaSemanaProps) => {
//         set((state) => actualizarDiaSemana({ state, horario, newValue }));
//       },

//       // ? Acción que lee el estado (on/off) de los días de la semana del horario dado:
//       // leerDiasSemana: (schedule: TypeSchedule) => {
//       //   return leerDiasSemana({ get, horario });
//       // },
//     }),
//     {
//       name: "",
//       storage: createJSONStorage(() => AsyncStorage),
//     }
//   )
// );

export const useDynamicStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      ...dynGlobalStore,

      eventAddAction: (event: IntEvent) =>
        set((state) => eventAdd({ state, event })),

      eventReadAllAction: () => eventReadAll({ get }),

      eventEraseAllAction: () => set((state) => eventEraseAll({ state })),

      eventExistsHourAction: (event: IntEvent) =>
        eventExistsHour({ get, event }),

      eventEraseAction: (event: IntEvent) =>
        set((state) => eventErase({ state, event })),

      readWeekdaysAction: (schedule: TypeSchedule) =>
        readWeekdays({ get, schedule }),

      updateWeekdayAction: (weekday: IntWeekday) => {
        console.log("weekday", weekday);
        set((state) => updateWeekday({ state, weekday }));
      },
    }),
    {
      name: "",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

/**
 * TODO:
 * Las opciones del bottomSheetHorario también deben ir guardadas en el store y se habilitan con un true o false. Para cada horario (regular, especial, eventual)
 * TODO:
 * Hacer el store más simple, en vez de estilo árbol usar un estilo plano.
 */
