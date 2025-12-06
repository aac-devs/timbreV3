import { GlobalStore, IntEvent } from "../../dyn.interface";

// ? Con state:
export interface IntState {
  state: GlobalStore;
}

// ! Con get:
export interface IntGet {
  get: () => GlobalStore;
}

export interface IntStateEvent extends IntState {
  event: IntEvent;
}

export interface IntGetEvent extends IntGet {
  event: IntEvent;
}
