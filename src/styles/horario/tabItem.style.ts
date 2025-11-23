import { TextStyle, ViewStyle } from "react-native";

import { Colors } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { TabItemComps } from "../global.phone.styles";

type TabItemReturn = ViewStyle | TextStyle;

export const TabItem = (comp: TabItemComps, colors: Colors): TabItemReturn => {
  const { black, secondary } = colors;

  switch (comp) {
    case "titleText":
      return {
        color: black,
        fontSize: moderateScale(12),
      } as TextStyle;
    case "indicator":
      return {
        backgroundColor: secondary,
        height: moderateScale(4),
      } as ViewStyle;
    default:
      const unreachable: never = comp;
      throw new Error(`Componente TabItem no manejado: ${unreachable}`);
  }
};
