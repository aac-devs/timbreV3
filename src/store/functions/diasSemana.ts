import { GlobalAppStore, TipoHorario } from "../dynamic.interface";

export interface DiaSemanaProps {
  state?: GlobalAppStore;
  horario: TipoHorario;
  newValue: Partial<GlobalAppStore>;
  // newValue: Partial<typeof dynamicGlobalState.globalState.datos.horarios>;
}

// ? Función que actualiza el estado (on/off) el botón del día de la semana al hacer clic en él:
export const actualizarDiaSemana = (props: DiaSemanaProps) => {
  const { state, horario, newValue } = props;

  return state
    ? {
        globalState: {
          ...state.globalState,
          datos: {
            ...state.globalState.datos,
            horarios: {
              ...state.globalState.datos.horarios,
              regular: {
                ...state.globalState.datos.horarios.regular,
                dias:
                  horario === "regular"
                    ? (newValue as never)
                    : state.globalState.datos.horarios.regular.dias,
              },
              especial: {
                ...state.globalState.datos.horarios.especial,
                dias:
                  horario === "especial"
                    ? (newValue as never)
                    : state.globalState.datos.horarios.especial.dias,
              },
              eventual: {
                ...state.globalState.datos.horarios.eventual,
                dias:
                  horario === "eventual"
                    ? (newValue as never)
                    : state.globalState.datos.horarios.eventual.dias,
              },
            },
          },
        },
      }
    : {};
};

export interface DiasSemanaProps {
  get: () => GlobalAppStore;
  horario: TipoHorario;
}

// ? Función que lee el estado (on/off) de los días de la semana del horario dado:
export const leerDiasSemana = ({ get, horario }: DiasSemanaProps): number[] => {
  return get().globalState.datos.horarios[horario].dias;
};
