import { AddEventProps } from "./functions/agregarEvento";

export type TipoTimbre = "entrada" | "clase" | "descanso" | "salida";
type HoraEvento = `0${number}` | `1${number}` | `20` | `21` | `22` | `23`;
type MinutosEvento =
  | `0${number}`
  | `1${number}`
  | `2${number}`
  | `3${number}`
  | `4${number}`
  | `5${number}`;

export type Hora = `${HoraEvento}:${MinutosEvento}`;
export type Evento = { tipo: TipoTimbre; hora: Hora };
export type TipoHorario = "regular" | "especial" | "eventual";

interface Store {
  // ! Dispositivo:
  dispositivoRegistrado: boolean;
  dispositivoConectado: boolean;

  // ! Horarios:
  regularEnviado: boolean;
  regularDias: number[];
  regularTimbres: Evento[];
  especialEnviado: boolean;
  especialDias: number[];
  especialTimbres: Evento[];
  eventualEnviado: boolean;
  eventualDias: number[];
  eventualTimbres: Evento[];

  // ! Rings:

  // ! Reloj:

  // ! Batería:

  // ! BottomSheet:
}

export interface GlobalSt {
  glob: Store;
}
interface GlobalActions extends GlobalSt {
  // Agrega un evento al horario indicado:
  agregarEvento: (horario: TipoHorario, evento: Evento) => void;
  // Lee todos los eventos del horario indicado:
  leerEventos: (horario: TipoHorario) => Evento[];
  // Borra todos los eventos del horario indicado:
  borrarEventos: (horario: TipoHorario) => void;
  // Verifica si existe una hora de evento en el horario indicado:
  existeHoraEvento: (horario: TipoHorario, horaEvento: Hora) => boolean;
  // Borra un evento del horario indicado:
  borrarEvento: (horario: TipoHorario, horaEvento: Hora) => void;
}

export type GlobalStore = GlobalSt & GlobalActions;
