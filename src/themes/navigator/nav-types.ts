import { Theme as NavigationTheme } from "@react-navigation/native";
import { Theme as RNETheme } from "@rneui/themed";

export type HexColor = `#${string}`;

type GradientColorLevels = {
  high: HexColor;
  medium: HexColor;
  low: HexColor;
};

export interface CustomNavigationTypes extends NavigationTheme {
  colors: NavigationTheme["colors"] & {
    gradientColors?: GradientColorLevels;
  };
  fonts: NavigationTheme["fonts"];
  dark: boolean;
}

declare module "@rneui/themed" {
  export interface Colors {
    entrada: string;
    clase: string;
    descanso: string;
    salida: string;
    textEntrada: string;
    textClase: string;
    textDescanso: string;
    textSalida: string;
  }
}

export type CustomRNETheme = RNETheme;
