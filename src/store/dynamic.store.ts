import { create } from "zustand";
import { GlobalAppStore, TipoHorario } from "./dynamic.interface";
import { createJSONStorage, persist } from "zustand/middleware";
import { dynamicGlobalState } from "./dynamic.data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  actualizarDiaSemana,
  DiaSemanaProps,
  leerDiasSemana,
} from "./functions/diasSemana";

export const useDynamicData = create<GlobalAppStore>()(
  persist(
    (set, get) => ({
      ...dynamicGlobalState,

      // ? Acción que actualiza el estado (on/off) el botón del día de la semana al hacer clic en él:
      actualizarDiaSemana: ({ horario, newValue }: DiaSemanaProps) => {
        set((state) => actualizarDiaSemana({ state, horario, newValue }));
      },

      // ? Acción que lee el estado (on/off) de los días de la semana del horario dado:
      leerDiasSemana: (horario: TipoHorario) => {
        return leerDiasSemana({ get, horario });
      },
    }),
    {
      name: "",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
