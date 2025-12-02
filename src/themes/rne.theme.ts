import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { colors } from "./colors";

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
    success: colors.dark.enviado,
    error: colors.dark.noEnviado,
    iconEdit: colors.dark.iconEdit,
    iconDelete: colors.dark.iconDelete,
  },
  mode: "dark",
});

export const lightTheme = createTheme({
  lightColors: {
    ...lightColors,
    background: colors.light.background,
    black: colors.light.text,
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
    success: colors.light.enviado,
    error: colors.light.noEnviado,
    iconEdit: colors.light.iconEdit,
    iconDelete: colors.light.iconDelete,
  },
  mode: "light",
});
