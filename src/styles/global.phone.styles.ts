import {
  ImageStyle,
  PressableStateCallbackType,
  TextStyle,
  ViewStyle,
} from "react-native";

import { useTheme } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { fontWeights } from "../themes/fonts/fonts";
import { DialOptions } from "../store/es.static.interface";

const HomeScreenStyles = {
  mainContainer: { flex: 1 } as ViewStyle,
  titleContainer: {
    flex: 1,
    paddingVertical: moderateScale(30),
    alignItems: "center",
    justifyContent: "flex-end",
  } as ViewStyle,
  title: {
    textAlign: "center",
    textShadowColor: "rgba(168, 168, 168, 0.75)", // Color de la sombra
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento
    textShadowRadius: 5, // Difuminado
  } as TextStyle,
  bodyContainer: {
    flex: 7,
    gap: moderateScale(15),
    paddingBottom: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
};

const DiasSemanaStyles = () => {
  const { secondary, background, white } = useTheme().theme.colors;
  return {
    mainContainer: {
      width: "80%",
      justifyContent: "center",
      alignSelf: "center",
      gap: moderateScale(10),
      paddingTop: moderateScale(10),
    } as ViewStyle,
    title: {
      fontSize: moderateScale(14),
    } as TextStyle,
    bgContainer: { marginBottom: moderateScale(20) } as ViewStyle,
    bgSelectedButton: { backgroundColor: secondary } as ViewStyle,
    bgButton: { backgroundColor: background } as ViewStyle,
    bgSelectedText: {
      fontSize: moderateScale(12),
      fontWeight: fontWeights.heavy,
      color: white,
    } as TextStyle,
  };
};

const TabItemsStyles = () => {
  const { black, secondary } = useTheme().theme.colors;
  return {
    title: {
      color: black,
      fontSize: moderateScale(12),
    } as TextStyle,
    indicator: {
      backgroundColor: secondary,
      height: moderateScale(4),
    } as ViewStyle,
  };
};

const PressHomeStyles = () => {
  const { grey3 } = useTheme().theme.colors;
  return {
    pressable: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: moderateScale(10),
      width: "40%",
      alignSelf: "center",
      borderWidth: 1,
      borderRadius: moderateScale(10),
      borderColor: grey3,
      elevation: 10,
    } as ViewStyle,
    pressablePressed: {} as ViewStyle,
    image: {
      width: moderateScale(70),
      height: moderateScale(70),
    } as ImageStyle,
  };
};

export const fnPressHomeStyles = (state: PressableStateCallbackType) => {
  const { grey4, background } = useTheme().theme.colors;
  return [
    { backgroundColor: state.pressed ? grey4 : background },
    PressHomeStyles().pressable,
  ];
};

const DialActionStyles = (option: DialOptions) => {
  const colors = useTheme().theme.colors;
  const titleColor =
    option === "entrada"
      ? colors.textEntrada
      : option === "clase"
      ? colors.textClase
      : option === "descanso"
      ? colors.textDescanso
      : colors.textSalida;
  return {
    dialColor: colors[option],
    title: {
      color: titleColor,
      fontSize: moderateScale(18),
      fontWeight: fontWeights.bold,
    },
  };
};

type ElementStyles =
  | "HomeScreen"
  | "DiasSemana"
  | "TabItemHorario"
  | "PressHome"
  | "PressHomeFunc"
  | "DialHorario"
  | undefined;

export const globalStyles = (element: ElementStyles) => {
  return (dialOption: DialOptions = "entrada") => {
    if (element === "HomeScreen") return { HomeScreenStyles };
    if (element === "DiasSemana")
      return { DiasSemanaStyles: DiasSemanaStyles() };
    if (element === "TabItemHorario")
      return { TabItemsStyles: TabItemsStyles() };
    if (element === "PressHome") return { PressHomeStyles: PressHomeStyles() };
    if (element === "DialHorario") {
      return { DialActionStyles: DialActionStyles(dialOption) };
    }
  };
};
