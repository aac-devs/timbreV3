import { AppTypeColor } from "./nav-types";

interface NamedColors {
  background: AppTypeColor;
  text: AppTypeColor;
  highlight: AppTypeColor;
  secondary: AppTypeColor;
  bgHigh: AppTypeColor;
  bgMed: AppTypeColor;
  bgLow: AppTypeColor;
  entrada: AppTypeColor;
  clase: AppTypeColor;
  descanso: AppTypeColor;
  salida: AppTypeColor;
  textEntrada: AppTypeColor;
  textClase: AppTypeColor;
  textDescanso: AppTypeColor;
  textSalida: AppTypeColor;
  enviado: AppTypeColor;
  noEnviado: AppTypeColor;
  iconEdit: AppTypeColor;
  iconDelete: AppTypeColor;
}

interface AppColors {
  dark: NamedColors;
  light: NamedColors;
}

export const colors: AppColors = {
  dark: {
    background: "rgba(18, 18, 18, 1)",
    text: "#ccc",
    highlight: "orange",
    secondary: "#ADFF2F",
    bgHigh: "rgba(18, 18, 18, 1)",
    bgMed: "rgba(38, 38, 38, 1)",
    bgLow: "rgba(18, 18, 18, 1)",
    entrada: "#00FA9A",
    clase: "#1E90FF",
    descanso: "#FFFF00",
    salida: "#FF4500",
    textEntrada: "#333",
    textClase: "#eee",
    textDescanso: "#222",
    textSalida: "#fff",
    enviado: "#00FF7F",
    noEnviado: "#DC143C",
    iconEdit: "#439ce0",
    iconDelete: "#ff190c",
  },
  light: {
    background: "rgba(255, 255, 255, 1)",
    text: "#222",
    highlight: "#00f",
    secondary: "#FF4500",
    bgHigh: "rgba(255, 255, 255, 1)",
    bgMed: "rgba(240, 240, 240, 1)",
    bgLow: "rgba(255, 255, 255, 1)",
    entrada: "#32CD32",
    clase: "#0000CD",
    descanso: "#FF00FF",
    salida: "#FFFF00",
    textEntrada: "#444",
    textClase: "#fff",
    textDescanso: "#eee",
    textSalida: "#555",
    enviado: "#32CD32",
    noEnviado: "#F08080",
    iconEdit: "#2089dc",
    iconDelete: "#bf2c24",
  },
};
