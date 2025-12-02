import {
  ImageStyle,
  PressableStateCallbackType as PSCB,
  ViewStyle,
} from "react-native";

import { moderateScale } from "react-native-size-matters";
import { Colors } from "@rneui/themed";

import { HomeBtnComp as HBC } from "../global.phone.styles";

type HBReturn = ViewStyle | ImageStyle;

export const HomeButtons = (comp: HBC, colors: Colors, st?: PSCB): HBReturn => {
  const { grey3, grey4, background } = colors;

  switch (comp) {
    case "pressable":
      return {
        backgroundColor: st && st.pressed ? grey4 : background,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: moderateScale(10),
        width: moderateScale(140),
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
      const unreachable: never = comp;
      throw new Error(`Componente HomeButtons no manejado: ${unreachable}`);
  }
};
