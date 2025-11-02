import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { colors } from "../colors/colors";

export const darkTheme = createTheme({
  darkColors: {
    ...darkColors,
    background: colors.dark.background,
    black: colors.dark.text, // Color de letras de los textos
    primary: colors.dark.background,
    secondary: colors.dark.secondary,
    entrada: colors.dark.entrada,
    clase: colors.dark.clase,
    descanso: colors.dark.descanso,
    salida: colors.dark.salida,
    textEntrada: colors.dark.textEntrada,
    textClase: colors.dark.textClase,
    textDescanso: colors.dark.textDescanso,
    textSalida: colors.dark.textSalida,
    success: "yellow",
  },
  mode: "dark",
});

export const lightTheme = createTheme({
  lightColors: {
    ...lightColors,
    // background: "yellow",
    background: colors.light.background,
    black: colors.light.text,
    // white: "pink",
    primary: colors.light.background,
    secondary: colors.light.secondary,
    entrada: colors.light.entrada,
    clase: colors.light.clase,
    descanso: colors.light.descanso,
    salida: colors.light.salida,
    textEntrada: colors.light.textEntrada,
    textClase: colors.light.textClase,
    textDescanso: colors.light.textDescanso,
    textSalida: colors.light.textSalida,
    success: "orange",
    // primary: "yellow",
  },
  mode: "light",
});
