import { Theme as NavigationTheme } from "@react-navigation/native";
import { Theme as RNETheme } from "@rneui/themed";

type TypeHexColor = `#${string}`;
type TypeRGBAColor = `rgba(${number},${number},${number},${number})`;
export type TypeAppColor = TypeHexColor | TypeRGBAColor | string;

type IntGradientColorLevels = {
  high: TypeAppColor;
  medium: TypeAppColor;
  low: TypeAppColor;
};

export interface IntCustomNavigationTypes extends NavigationTheme {
  colors: NavigationTheme["colors"] & {
    gradientColors?: IntGradientColorLevels;
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

export type TypeCustomRNETheme = RNETheme;
