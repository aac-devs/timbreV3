import { GlobalSt } from "./dyn.interface";

export const dynGlobalStore: GlobalSt = {
  // ! Dispositivo:
  glob: {
    dispositivoConectado: false,
    dispositivoRegistrado: false,

    // ! Horarios:
    // ? Regular:
    regularEnviado: false,
    regularDias: [],
    regularTimbres: [{ tipo: "entrada", hora: "06:18" }],
    // ? Especial:
    especialEnviado: false,
    especialDias: [],
    especialTimbres: [],
    // ? Eventual:
    eventualEnviado: false,
    eventualDias: [],
    eventualTimbres: [],

    // ! Rings:

    // ! Reloj:

    // ! Batería:

    // ! BottomSheet:
  },
};
