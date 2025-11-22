import { ViewStyle } from "react-native";

import { useTheme } from "@react-navigation/native";

import { FondoProps } from "../global.phone.styles";
import { CustomNavigationTypes } from "../../themes/navigator/nav-types";
import { moderateScale } from "react-native-size-matters";

export const Fondo = (component: FondoProps) => {
  const { colors }: CustomNavigationTypes = useTheme();

  const g = colors.gradientColors;
  if (!g) return;

  switch (component) {
    case "colors":
      return [g.high, g.medium, g.low];
    case "compStyle":
      return {
        flex: 1,
        alignItems: "stretch",
        padding: moderateScale(10),
      } as ViewStyle;
    case "start":
      return { x: 0, y: 0 } as { x: number; y: number };
    case "end":
      return { x: 1, y: 1 } as { x: number; y: number };
    default:
      const unreachable: never = component;
      throw new Error(`Componente Fondo no manejado: ${unreachable}`);
  }
};
