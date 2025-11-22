import { TextStyle, ViewStyle } from "react-native";

import { moderateScale } from "react-native-size-matters";

import { HomeComps } from "../global.phone.styles";

export const Home = (component: HomeComps): ViewStyle | TextStyle => {
  switch (component) {
    case "mainCont":
      return { flex: 1 } as ViewStyle;
    case "titleCont":
      return {
        flex: 1,
        paddingVertical: moderateScale(30),
        alignItems: "center",
        justifyContent: "flex-end",
      } as ViewStyle;
    case "titleText":
      return {
        textAlign: "center",
        textShadowColor: "rgba(168, 168, 168, 0.75)", // Color de la sombra
        textShadowOffset: { width: 2, height: 2 }, // Desplazamiento
        textShadowRadius: 5, // Difuminado
      } as TextStyle;
    case "bodyCont":
      return {
        flex: 7,
        gap: moderateScale(15),
        paddingBottom: moderateScale(40),
        justifyContent: "center",
        alignItems: "center",
      } as ViewStyle;
    default:
      const unreachable: never = component;
      throw new Error(`Componente Home no manejado: ${unreachable}`);
  }
};
