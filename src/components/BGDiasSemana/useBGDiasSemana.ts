import { useTheme } from "@rneui/themed";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { fontWeights } from "../../themes/fonts/fonts";
import { diasSemanaInitialState } from "./BGDiasSemana.state";
import { BGDiasSemanaStyles } from "./BGDiasSemana.styles.phone";

export const useBGDiasSemana = () => {
  const { theme } = useTheme();

  // * Valores iniciales
  const title = diasSemanaInitialState.title;
  const buttonLabels: string[] = diasSemanaInitialState.daysLabels;

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
    title,
    mainContainerStyles,
    buttonLabels,
    selectedButtonStyle,
    buttonStyle,
    selectedTextStyle,
    containerStyle,
  };
};
