import { TextStyle, ViewStyle } from "react-native";

import { Colors } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { fontWeights } from "../../themes/fonts/fonts";
import { SpeedDialComp } from "../global.phone.styles";
import { IconNode } from "@rneui/base";

export const DialAction = (): TextStyle => {
  return {
    fontSize: moderateScale(18),
    fontWeight: fontWeights.bold,
  };
};

type SDReturn = IconNode | string | ViewStyle;

export const SpeedDial = (comp: SpeedDialComp, colors: Colors): SDReturn => {
  switch (comp) {
    case "icon":
      return { name: "edit", color: colors.white } as IconNode;
    case "openIcon":
      return { name: "close", color: colors.white } as IconNode;
    case "color":
      return colors.secondary as string;
    case "overlayColor":
      return "rgba(0,0,0,0.5)" as string;
    case "compStyle":
      return { bottom: "8%" } as ViewStyle;
    default:
      const unreachable: never = comp;
      throw new Error(`Componente SpeedDial no manejado: ${unreachable}`);
  }
};
