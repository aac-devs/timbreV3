import { StaticSpanishData } from "./es.static.interface";

export const spanishData: StaticSpanishData = {
  home: {
    pressable: {
      horarios: {
        title: "Horarios",
        imageAsset: require("../../assets/schedule.png"),
        goTo: "horarios",
      },
      rings: {
        title: "Rings",
        imageAsset: require("../../assets/bell.png"),
        goTo: "rings",
      },
      reloj: {
        title: "Reloj",
        imageAsset: require("../../assets/clock.png"),
        goTo: "reloj",
      },
      bateria: {
        title: "Batería",
        imageAsset: require("../../assets/battery.png"),
        goTo: "bateria",
      },
    },
  },
  horarios: {
    titulos: {
      regular: "Regular",
      especial: "Especial",
      eventual: "Eventual",
    },
    diasSemana: {
      titulo: "Días de activación de horario",
      labels: ["D", "L", "M", "X", "J", "V", "S"],
    },
    regular: {
      tabItem: {
        icon: {
          name: "calendar-range-outline",
          type: "material-community",
        },
      },
    },
    especial: {
      tabItem: {
        icon: {
          name: "bullseye-arrow",
          type: "material-community",
        },
      },
    },
    eventual: {
      tabItem: {
        icon: {
          name: "exclamation-triangle",
          type: "font-awesome",
        },
      },
    },
  },
  rings: {},
  reloj: {},
  bateria: {},
};

// * Se copian los textos de español a inglés provisionalmente:
export const englishData: StaticSpanishData = {
  ...spanishData,
  horarios: {
    titulos: {
      regular: "Regular",
      especial: "Especial",
      eventual: "Eventual",
    },
    diasSemana: {
      titulo: "Schedule activation days",
      labels: ["S", "M", "T", "W", "T", "F", "S"],
    },
    regular: {
      tabItem: {
        icon: {
          name: "calendar-range-outline",
          type: "material-community",
        },
      },
    },
    especial: {
      tabItem: {
        icon: {
          name: "bullseye-arrow",
          type: "material-community",
        },
      },
    },
    eventual: {
      tabItem: {
        icon: {
          name: "exclamation-triangle",
          type: "font-awesome",
        },
      },
    },
  },
};
