import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { useTheme } from "@rneui/themed";

import { fontWeights } from "../../themes/fonts/fonts";
import { BGDiasSemanaStyles } from "./BGDiasSemana.styles.phone";

export const useColorFontBGDiasSemana = () => {
  const { theme } = useTheme();

  // * Estilos del Componente General
  const mainContainerStyles = BGDiasSemanaStyles.container;

  // * Estilos propios del ButtonGroup
  const containerStyle: StyleProp<ViewStyle> = { marginBottom: 20 };
  const selectedButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.colors.secondary,
  };
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.colors.background,
  };
  const selectedTextStyle: StyleProp<TextStyle> = {
    fontWeight: fontWeights.heavy,
    color: theme.colors.white,
  };

  return {
    mainContainerStyles,
    selectedButtonStyle,
    buttonStyle,
    selectedTextStyle,
    containerStyle,
  };
};
