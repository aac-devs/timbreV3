import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { colors } from "../colors/colors";
import { fonts } from "../fonts/fonts";
import { CustomNavigationTypes } from "./nav-types";
import { darkTheme, lightTheme } from "../elements/theme";

export const DarkNavigatorTheme: CustomNavigationTypes = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // El color principal de la aplicación se usa para dar color a varios elementos.
    // Normalmente, querrás usar el color de tu marca para esto.
    primary: darkTheme.darkColors?.secondary
      ? darkTheme.darkColors.secondary
      : colors.dark.highlight,
    // primary: colors.dark.highlight, // (Color de ícono y texto del Tab activo)
    // El color de diversos fondos, como el color de fondo de las pantallas.
    background: colors.dark.background, // (Color del background no configurado en la screen)
    // El color de fondo de los elementos tipo tarjeta, como encabezados, barras de pestañas, etc.
    card: colors.dark.background, // (Color de fondo de los Tabs y el header)
    // El color del texto de varios elementos
    text: colors.dark.text, // (Título header, ícono y texto de los tabs)
    // El color de los bordes, por ejemplo, el borde del encabezado, el borde de la barra de pestañas, etc.
    border: colors.dark.text, // (Línea que separa la pantalla de los tabs)
    // El color de las notificaciones y del distintivo (por ejemplo, el distintivo en las pestañas inferiores).
    notification: "yellow",
    gradientColors: {
      high: colors.dark.bgHigh,
      medium: colors.dark.bgMed,
      low: colors.dark.bgLow,
    },
  },
  fonts: fonts,
  dark: true,
};

export const LightNavigatorTheme: CustomNavigationTypes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: lightTheme.lightColors?.secondary
      ? lightTheme.lightColors.secondary
      : colors.dark.highlight,
    // primary: colors.light.highlight,
    background: colors.light.background,
    card: colors.light.background,
    text: colors.light.text,
    border: colors.dark.text,
    notification: "yellow",
    gradientColors: {
      high: colors.light.bgHigh,
      medium: colors.light.bgMed,
      low: colors.light.bgLow,
    },
  },
  fonts: fonts,
  dark: false,
};
