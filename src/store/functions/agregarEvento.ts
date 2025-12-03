import { Evento, GlobalStore, TipoHorario } from "../dyn.interface";

export interface AddEventProps {
  state: GlobalStore;
  horario: TipoHorario;
  evento: Evento;
}

export const fnAgregarEvento = (props: AddEventProps) => {
  const { state, horario, evento } = props;
  //   return false;
  console.log("Agregando evento:", evento);
  const newState = {
    ...state,
    glob: {
      ...state.glob,
      regularTimbres:
        horario === "regular"
          ? [...state.glob.regularTimbres, evento]
          : horario === "especial"
          ? [...state.glob.especialTimbres, evento]
          : horario === "eventual"
          ? [...state.glob.eventualTimbres, evento]
          : [...state.glob.regularTimbres],
    },
  };
  return newState;
};

export interface LeerEventosProps {
  get: () => GlobalStore;
  horario: TipoHorario;
}

export const fnLeerEventos = ({ get, horario }: LeerEventosProps) => {
  if (horario === "regular") return get().glob.regularTimbres;
  if (horario === "especial") return get().glob.especialTimbres;
  if (horario === "eventual") return get().glob.eventualTimbres;
  return [];
};

export interface EraseEventProps {
  state: GlobalStore;
  horario: TipoHorario;
}
export const fnBorrarEventos = ({ state, horario }: EraseEventProps) => {
  if (horario === "regular") {
    return state
      ? {
          glob: {
            ...state.glob,
            regularTimbres: [],
          },
        }
      : {};
  }
  if (horario === "especial") {
    return state
      ? {
          glob: {
            ...state.glob,
            especialTimbres: [],
          },
        }
      : {};
  }
  if (horario === "eventual") {
    return state
      ? {
          glob: {
            ...state.glob,
            eventualTimbres: [],
          },
        }
      : {};
  }
  return {};
};
