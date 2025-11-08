import { create } from "zustand";
import { DiasSemana, DynamicData, TipoHorario } from "./dynamic.interface";
import { createJSONStorage, persist } from "zustand/middleware";
import { dynamicInitialState } from "./dynamic.data";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface DynamicState {
  state: DynamicData;
  leerDiasSemana: (horario: TipoHorario) => DiasSemana;
}

export const useDynamicData = create<DynamicState>()(
  persist(
    (set, get) => ({
      state: dynamicInitialState,
      leerDiasSemana: (horario: TipoHorario) => {
        const diasSemana: DiasSemana =
          horario === "regular"
            ? get().state.datos.horarios.regular.dias
            : horario === "especial"
            ? get().state.datos.horarios.especial.dias
            : get().state.datos.horarios.eventual.dias;
        return diasSemana;
      },
    }),
    {
      name: "",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
