import { create } from "zustand";
import { GlobalAppStore } from "./dynamic.interface";
import { createJSONStorage, persist } from "zustand/middleware";
import { dynamicGlobalState } from "./dynamic.data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  actualizarDiaSemana,
  DiaSemanaProps,
  leerDiasSemana,
} from "./functions/diasSemana";
import { GlobalStore, IntEvent, TypeHour, TypeSchedule } from "./dyn.interface";
import { dynGlobalStore } from "./dyn.data";
import { eventAdd } from "./functions/eventos/event.add";
import { eventReadAll } from "./functions/eventos/event.read-all";
import { eventEraseAll } from "./functions/eventos/event.erase-all";
import { eventErase } from "./functions/eventos/event.erase";
import { eventExistsHour } from "./functions/eventos/event.exist-hour";

export const useDynamicData = create<GlobalAppStore>()(
  persist(
    (set, get) => ({
      ...dynamicGlobalState,

      // ? Acción que actualiza el estado (on/off) el botón del día de la semana al hacer clic en él:
      actualizarDiaSemana: ({ horario, newValue }: DiaSemanaProps) => {
        set((state) => actualizarDiaSemana({ state, horario, newValue }));
      },

      // ? Acción que lee el estado (on/off) de los días de la semana del horario dado:
      leerDiasSemana: (horario: TypeSchedule) => {
        return leerDiasSemana({ get, horario });
      },
    }),
    {
      name: "",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useDynamicStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      ...dynGlobalStore,
      eventAddAction: (event: IntEvent) => {
        set((state) => eventAdd({ state, event }));
      },
      eventReadAllAction: () => {
        return eventReadAll({ get });
      },
      eventEraseAllAction: () => {
        set((state) => eventEraseAll({ state }));
      },
      eventExistsHourAction: (event: IntEvent) => {
        return eventExistsHour({ get, event });
      },
      eventEraseAction: (event: IntEvent) => {
        set((state) => eventErase({ state, event }));
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
