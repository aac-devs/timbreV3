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

type Hora = `${HoraEvento}:${MinutosEvento}`;
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
  agregarEvento: (horario: TipoHorario, evento: Evento) => void;
  leerEventos: (horario: TipoHorario) => Evento[];
  borrarEventos: (horario: TipoHorario) => void;
}

export type GlobalStore = GlobalSt & GlobalActions;
