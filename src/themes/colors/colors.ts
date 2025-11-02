import { HexColor } from "../navigator/nav-types";

interface AppColors {
  dark: {
    background: HexColor | string;
    text: HexColor | string;
    highlight: HexColor | string;
    secondary: HexColor | string;
    bgHigh: HexColor;
    bgMed: HexColor;
    bgLow: HexColor;
    entrada: HexColor;
    clase: HexColor;
    descanso: HexColor;
    salida: HexColor;
    textEntrada: HexColor;
    textClase: HexColor;
    textDescanso: HexColor;
    textSalida: HexColor;
  };
  light: {
    background: HexColor;
    text: HexColor;
    highlight: HexColor;
    secondary: HexColor | string;
    bgHigh: HexColor;
    bgMed: HexColor;
    bgLow: HexColor;
    entrada: HexColor;
    clase: HexColor;
    descanso: HexColor;
    salida: HexColor;
    textEntrada: HexColor;
    textClase: HexColor;
    textDescanso: HexColor;
    textSalida: HexColor;
  };
}

export const colors: AppColors = {
  dark: {
    background: "#222",
    text: "#ccc",
    highlight: "orange",
    secondary: "#ADFF2F",
    bgHigh: "#111f",
    bgMed: "#333f",
    bgLow: "#111f",
    entrada: "#00FA9A",
    clase: "#1E90FF",
    descanso: "#FFFF00",
    salida: "#FF4500",
    textEntrada: "#333",
    textClase: "#eee",
    textDescanso: "#222",
    textSalida: "#fff",
  },
  light: {
    background: "#eee",
    text: "#222",
    highlight: "#00f",
    secondary: "#FF4500",
    bgHigh: "#ffff",
    bgMed: "#dddf",
    bgLow: "#ffff",
    entrada: "#32CD32",
    clase: "#0000CD",
    descanso: "#FF00FF",
    salida: "#FFFF00",
    textEntrada: "#444",
    textClase: "#fff",
    textDescanso: "#eee",
    textSalida: "#555",
  },
};
