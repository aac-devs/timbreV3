export type TypeRingType = "entrada" | "clase" | "descanso" | "salida";

type TypeEventHour = `0${number}` | `1${number}` | `20` | `21` | `22` | `23`;

type TypeEventMinutes =
  | `0${number}`
  | `1${number}`
  | `2${number}`
  | `3${number}`
  | `4${number}`
  | `5${number}`;

export type TypeHour = `${TypeEventHour}:${TypeEventMinutes}`;

export type TypeSchedule = "regular" | "especial" | "eventual";

export interface IntEvent {
  hour: TypeHour;
  ringType: TypeRingType;
  scheduleType: TypeSchedule;
}

interface Store {
  // ! Dispositivo:
  dispositivoRegistrado: boolean;
  dispositivoConectado: boolean;

  // ! Horarios:
  regularSended: boolean;
  specialSended: boolean;
  temporarySended: boolean;

  regularDays: number[];
  specialDays: number[];
  temporaryDays: number[];

  events: IntEvent[];
  // regularTimbres: TypeEvent[];
  // especialEnviado: boolean;
  // especialDias: number[];
  // especialTimbres: TypeEvent[];
  // eventualEnviado: boolean;
  // eventualDias: number[];
  // eventualTimbres: TypeEvent[];

  // ! Rings:

  // ! Reloj:

  // ! Batería:

  // ! BottomSheet:
}

export interface GlobalSt {
  globe: Store;
}
interface GlobalActions extends GlobalSt {
  // Agrega un evento al horario indicado:
  eventAddAction: (event: IntEvent) => void;
  // Lee todos los eventos del horario indicado:
  eventReadAllAction: () => IntEvent[];
  // Borra todos los eventos del horario indicado:
  eventEraseAllAction: () => void;
  // Verifica si existe una hora de evento en el horario indicado:
  eventExistsHourAction: (event: IntEvent) => boolean;
  // Borra un evento del horario indicado:
  eventEraseAction: (event: IntEvent) => void;
}

export type GlobalStore = GlobalSt & GlobalActions;
