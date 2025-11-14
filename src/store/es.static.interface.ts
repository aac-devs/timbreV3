// Archivo que define la estructura de los textos de la aplicación en español:

import { ImageSourcePropType } from "react-native";

type TabItemType = {
  icon: {
    name: string;
    type: string;
  };
};

export type PressableHomeParams = {
  title: string;
  imageAsset: ImageSourcePropType;
  goTo: string;
};

type EnBellTitle = "Arrival" | "Class" | "Recess" | "Dismisal";
type EsBellTitle = "Entrada" | "Clase" | "Descanso" | "Salida";

export type DialOptions = "entrada" | "clase" | "descanso" | "salida";

export interface StaticSpanishData {
  appTitle: string;
  home: {
    pressable: {
      horarios: PressableHomeParams;
      rings: PressableHomeParams;
      reloj: PressableHomeParams;
      bateria: PressableHomeParams;
    };
  };
  horarios: {
    titulos: {
      regular: string;
      especial: string;
      eventual: string;
    };
    diasSemana: {
      titulo: string;
      labels: string[];
    };
    regular: {
      tabItem: TabItemType;
    };
    especial: {
      tabItem: TabItemType;
    };
    eventual: {
      tabItem: TabItemType;
    };
    dialButtons: {
      entrada: EnBellTitle | EsBellTitle;
      clase: EnBellTitle | EsBellTitle;
      descanso: EnBellTitle | EsBellTitle;
      salida: EnBellTitle | EsBellTitle;
    };
  };
  rings: {};
  reloj: {};
  bateria: {};
}
