import { GlobalSt } from "./interfaces/store.interface";

export const dynGlobalStore: GlobalSt = {
  // ! Dispositivo:
  globe: {
    dispositivoConectado: false,
    dispositivoRegistrado: false,

    // ! Horarios:
    regularSended: false,
    specialSended: false,
    temporarySended: false,

    regularDays: [],
    specialDays: [],
    temporaryDays: [],

    events: [],
    // ! Rings:

    // ! Reloj:

    // ! Batería:

    // ! BottomSheet:
  },
};
