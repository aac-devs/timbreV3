import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { appColors } from "./colors";
import { fonts } from "./fonts";
import { IntCustomNavigationTypes } from "./nav-types";
import { darkTheme, lightTheme } from "./rne.theme";

export const DarkNavigatorTheme: IntCustomNavigationTypes = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // El color principal de la aplicación se usa para dar color a varios elementos.
    // Normalmente, querrás usar el color de tu marca para esto.
    primary: darkTheme.darkColors?.secondary
      ? darkTheme.darkColors.secondary
      : appColors.dark.highlight,
    // primary: colors.dark.highlight, // (Color de ícono y texto del Tab activo)
    // El color de diversos fondos, como el color de fondo de las pantallas.
    background: appColors.dark.background, // (Color del background no configurado en la screen)
    // El color de fondo de los elementos tipo tarjeta, como encabezados, barras de pestañas, etc.
    card: appColors.dark.background, // (Color de fondo de los Tabs y el header)
    // El color del texto de varios elementos
    text: appColors.dark.text, // (Título header, ícono y texto de los tabs)
    // El color de los bordes, por ejemplo, el borde del encabezado, el borde de la barra de pestañas, etc.
    border: appColors.dark.text, // (Línea que separa la pantalla de los tabs)
    // El color de las notificaciones y del distintivo (por ejemplo, el distintivo en las pestañas inferiores).
    notification: "yellow",
    gradientColors: {
      high: appColors.dark.bgHigh,
      medium: appColors.dark.bgMed,
      low: appColors.dark.bgLow,
    },
  },
  fonts: fonts,
  dark: true,
};

export const LightNavigatorTheme: IntCustomNavigationTypes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: lightTheme.lightColors?.secondary
      ? lightTheme.lightColors.secondary
      : appColors.dark.highlight,
    // primary: colors.light.highlight,
    background: appColors.light.background,
    card: appColors.light.background,
    text: appColors.light.text,
    border: appColors.dark.text,
    notification: "yellow",
    gradientColors: {
      high: appColors.light.bgHigh,
      medium: appColors.light.bgMed,
      low: appColors.light.bgLow,
    },
  },
  fonts: fonts,
  dark: false,
};
