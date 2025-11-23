import { TextStyle, ViewStyle } from "react-native";

import { Colors } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { DiasComps } from "../global.phone.styles";
import { fontWeights } from "../../themes/fonts";

type DiasReturn = ViewStyle | TextStyle;

export const Dias = (comp: DiasComps, colors: Colors): DiasReturn => {
  const { secondary, background, white } = colors;

  switch (comp) {
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
      const unreachable: never = comp;
      throw new Error(`Componente Dias no manejado: ${unreachable}`);
  }
};
