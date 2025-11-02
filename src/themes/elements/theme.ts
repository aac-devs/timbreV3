import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { colors } from "../colors/colors";

export const darkTheme = createTheme({
  darkColors: {
    ...darkColors,
    background: colors.dark.background,
    black: colors.dark.text, // Color de letras de los textos
  },
  mode: "dark",
});

export const lightTheme = createTheme({
  lightColors: {
    ...lightColors,
    background: colors.light.background,
    black: colors.light.text,
  },
  mode: "light",
});
