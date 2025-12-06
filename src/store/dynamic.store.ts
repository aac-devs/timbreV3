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
import { Evento, GlobalStore, Hora, TipoHorario } from "./dyn.interface";
import { dynGlobalStore } from "./dyn.data";
import {
  EraseEventProps,
  fnAgregarEvento,
  fnBorrarEventos,
  fnLeerEventos,
  AddEventProps,
  fnExisteHoraEvento,
  fnBorrarEvento,
} from "./functions/agregarEvento";

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

export const useDynamicStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      ...dynGlobalStore,
      agregarEvento: (horario: TipoHorario, evento: Evento) => {
        set((state) => fnAgregarEvento({ state, horario, evento }));
      },
      leerEventos: (horario: TipoHorario) => {
        return fnLeerEventos({ get, horario });
      },
      borrarEventos: (horario: TipoHorario) => {
        set((state) => fnBorrarEventos({ state, horario }));
      },
      existeHoraEvento: (horario: TipoHorario, horaEvento: Hora) => {
        return fnExisteHoraEvento({ get, horario, horaEvento });
      },
      borrarEvento: (horario: TipoHorario, horaEvento: Hora) => {
        set((state) => fnBorrarEvento({ state, horario, horaEvento }));
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
