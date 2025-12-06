import { Evento, GlobalStore, Hora, TipoHorario } from "../dyn.interface";

export interface AddEventProps {
  state: GlobalStore;
  horario: TipoHorario;
  evento: Evento;
}

const obtenerNombreTimbre = (
  horario: TipoHorario
): "regularTimbres" | "especialTimbres" | "eventualTimbres" => {
  return horario == "regular"
    ? "regularTimbres"
    : horario === "especial"
    ? "especialTimbres"
    : "eventualTimbres";
};

export const fnAgregarEvento = (props: AddEventProps) => {
  const { state, horario, evento } = props;
  //   return false;
  console.log(`AGREGAR A HORARIO ${horario}`);
  // Definir la clave a la cual se le agregará el Evento:
  const horarioSel = obtenerNombreTimbre(horario);

  // Verificar que no exista ya el evento en el horario seleccionado:
  if (state.glob[horarioSel].filter((ev) => ev.hora === evento.hora).length > 0)
    return state;

  console.log(`Agregando evento a horario ${horario}:`, evento);

  // Guardar evento
  const newState = {
    ...state,
    glob: {
      ...state.glob,
      [horarioSel]: [...state.glob[horarioSel], evento],
    },
  };
  return newState;
  // return state;
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

export interface ExisteHoraProps {
  get: () => GlobalStore;
  horario: TipoHorario;
  horaEvento: Hora;
}

// ? FUNCIÓN LISTA:
export const fnExisteHoraEvento = (props: ExisteHoraProps) => {
  const { get, horario, horaEvento } = props;
  const horarioSel = obtenerNombreTimbre(horario);
  return (
    get().glob[horarioSel].filter((ev) => ev.hora === horaEvento).length > 0
  );
};

export interface EraseEventProps extends EraseAllEventsProps {
  horaEvento: Hora;
}

// ? FUNCIÓN LISTA
export const fnBorrarEvento = (props: EraseEventProps) => {
  const { state, horario, horaEvento } = props;
  const horarioSel = obtenerNombreTimbre(horario);
  const newState = {
    ...state,
    glob: {
      ...state.glob,
      [horarioSel]: [
        ...state.glob[horarioSel].filter((ev) => {
          if (ev.hora !== horaEvento) return ev;
        }),
      ],
    },
  };
  return newState;
};

export interface EraseAllEventsProps {
  state: GlobalStore;
  horario: TipoHorario;
}

export const fnBorrarEventos = ({ state, horario }: EraseAllEventsProps) => {
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
