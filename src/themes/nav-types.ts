import { Theme as NavigationTheme } from "@react-navigation/native";
import { Theme as RNETheme } from "@rneui/themed";

type HexColor = `#${string}`;
type RGBAColor = `rgba(${number},${number},${number},${number})`;
export type AppTypeColor = HexColor | RGBAColor | string;

type GradientColorLevels = {
  high: AppTypeColor;
  medium: AppTypeColor;
  low: AppTypeColor;
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
    enviado: string;
    noEnviado: string;
    iconEdit: string;
    iconDelete: string;
  }
}

export type CustomRNETheme = RNETheme;
