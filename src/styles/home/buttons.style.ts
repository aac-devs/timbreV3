import {
  ImageStyle,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";

import { moderateScale } from "react-native-size-matters";
import { useTheme } from "@rneui/themed";

import { HomeBtnComp } from "../global.phone.styles";

export const HomeButtons = (
  component: HomeBtnComp,
  state?: PressableStateCallbackType
): ViewStyle | ImageStyle => {
  const { grey3, grey4, background } = useTheme().theme.colors;

  switch (component) {
    case "pressable":
      return {
        backgroundColor: state && state.pressed ? grey4 : background,
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
      } as ViewStyle;
    case "image":
      return {
        width: moderateScale(70),
        height: moderateScale(70),
      } as ImageStyle;
    default:
      const unreachable: never = component;
      throw new Error(`Componente HomeButtons no manejado: ${unreachable}`);
  }
};
