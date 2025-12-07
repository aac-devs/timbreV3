import { IntEvent, TypeSchedule } from "./event.interface";
import { IntWeekday } from "./weekday.interface";

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
  //
  readWeekdaysAction: (scheduleType: TypeSchedule) => number[];
  //
  updateWeekdayAction: (weekday: IntWeekday) => void;
}

export type GlobalStore = GlobalSt & GlobalActions;
