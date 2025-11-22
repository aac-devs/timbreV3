import { TextStyle, ViewStyle } from "react-native";

import { useTheme } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { TabItemComps } from "../global.phone.styles";

export const TabItem = (component: TabItemComps): ViewStyle | TextStyle => {
  const { black, secondary } = useTheme().theme.colors;

  switch (component) {
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
      const unreachable: never = component;
      throw new Error(`Componente TabItem no manejado: ${unreachable}`);
  }
};
