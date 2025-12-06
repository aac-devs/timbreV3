import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { appColors } from "./colors";

export const darkTheme = createTheme({
  darkColors: {
    ...darkColors,
    background: appColors.dark.background,
    black: appColors.dark.text, // Color de letras de los textos
    primary: appColors.dark.background,
    secondary: appColors.dark.secondary,
    entrada: appColors.dark.entrada,
    clase: appColors.dark.clase,
    descanso: appColors.dark.descanso,
    salida: appColors.dark.salida,
    textEntrada: appColors.dark.textEntrada,
    textClase: appColors.dark.textClase,
    textDescanso: appColors.dark.textDescanso,
    textSalida: appColors.dark.textSalida,
    success: appColors.dark.enviado,
    error: appColors.dark.noEnviado,
    iconEdit: appColors.dark.iconEdit,
    iconDelete: appColors.dark.iconDelete,
  },
  mode: "dark",
});

export const lightTheme = createTheme({
  lightColors: {
    ...lightColors,
    background: appColors.light.background,
    black: appColors.light.text,
    primary: appColors.light.background,
    secondary: appColors.light.secondary,
    entrada: appColors.light.entrada,
    clase: appColors.light.clase,
    descanso: appColors.light.descanso,
    salida: appColors.light.salida,
    textEntrada: appColors.light.textEntrada,
    textClase: appColors.light.textClase,
    textDescanso: appColors.light.textDescanso,
    textSalida: appColors.light.textSalida,
    success: appColors.light.enviado,
    error: appColors.light.noEnviado,
    iconEdit: appColors.light.iconEdit,
    iconDelete: appColors.light.iconDelete,
  },
  mode: "light",
});
