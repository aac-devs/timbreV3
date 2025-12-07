import { GlobalStore } from "./store.interface";

export interface IntState {
  state: GlobalStore;
}

export interface IntGet {
  get: () => GlobalStore;
}
