import { TextStyle, ViewStyle } from "react-native";

import { useTheme } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { DiasComps } from "../global.phone.styles";
import { fontWeights } from "../../themes/fonts/fonts";

export const Dias = (component: DiasComps): ViewStyle | TextStyle => {
  const { secondary, background, white } = useTheme().theme.colors;

  switch (component) {
    case "bgCont":
      return { marginBottom: moderateScale(20) } as ViewStyle;
    case "bgSelBtn":
      return { backgroundColor: secondary } as ViewStyle;
    case "bgBtn":
      return { backgroundColor: background } as ViewStyle;
    case "mainCont":
      return {
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        gap: moderateScale(10),
        paddingTop: moderateScale(10),
      } as ViewStyle;
    case "titleText":
      return {
        fontSize: moderateScale(14),
      } as TextStyle;
    case "bgSelText":
      return {
        fontSize: moderateScale(12),
        fontWeight: fontWeights.heavy,
        color: white,
      } as TextStyle;
    default:
      const unreachable: never = component;
      throw new Error(`Componente Dias no manejado: ${unreachable}`);
  }
};
