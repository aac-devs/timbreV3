import { TypeSchedule } from "./event.interface";
import { IntGet, IntState } from "./global.interface";

export enum EnumWeekday {
  domingo = 0,
  lunes = 1,
  martes = 2,
  miercoles = 3,
  jueves = 4,
  viernes = 5,
  sabado = 6,
}

export interface IntWeekday {
  scheduleType: TypeSchedule;
  valueToUpdate: number[];
}

export interface IntGetWeekdays extends IntGet {
  schedule: TypeSchedule;
}

export interface IntStateWeekday extends IntState {
  weekday: IntWeekday;
}
