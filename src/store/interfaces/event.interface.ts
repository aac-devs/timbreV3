import { IntGet, IntState } from "./global.interface";

export type TypeSchedule = "regular" | "special" | "temporary";

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

export interface IntEvent {
  hour: TypeHour;
  ringType: TypeRingType;
  scheduleType: TypeSchedule;
}

export interface IntStateEvent extends IntState {
  event: IntEvent;
}

export interface IntGetEvent extends IntGet {
  event: IntEvent;
}
