import { TextStyle, ViewStyle } from "react-native";

import { Colors } from "@rneui/themed";
import { moderateScale } from "react-native-size-matters";

import { HorarioCardComp } from "../global.phone.styles";
import { fontWeights } from "../../themes/fonts";
import { IconNode } from "@rneui/base";

export const HorarioCard = (comp: HorarioCardComp, colors: Colors) => {
  const { black, grey3, iconEdit, iconDelete } = colors;

  switch (comp) {
    case "listItemCont": // ! ViewStyle
      return {
        backgroundColor: "transparent",
        paddingHorizontal: moderateScale(30),
      } as ViewStyle;
    case "avatarTitle": // ! TextStyle
      return { fontWeight: fontWeights.medium } as ViewStyle;
    case "avatarSize": // ! number
      return moderateScale(40) as number;
    case "avatarContStyle": // ! ViewStyle
      return {
        borderWidth: 1,
        borderColor: grey3,
      };
    case "text": // ! TextStyle
      return {
        fontWeight: fontWeights.regular,
        fontSize: moderateScale(28),
        color: black,
      } as TextStyle;
    case "liContent": // ! ViewStyle
      return {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      } as ViewStyle;
    case "buttonsCont": // ! ViewStyle
      return {
        flexDirection: "row",
        gap: moderateScale(10),
        // marginRight: moderateScale(20),
      } as ViewStyle;
    case "btnContStyle": // ! ViewStyle
      return { width: moderateScale(60) } as ViewStyle;
    case "btnEditIcon": // ! IconNode
      return {
        name: "edit",
        type: "font-awesome",
        size: moderateScale(28),
        color: iconEdit,
      } as IconNode;
    case "btnStyle": // ! ViewStyle
      return {
        backgroundColor: "transparent",
        borderColor: grey3,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        height: moderateScale(45),
      } as ViewStyle;
    case "btnDeleteIcon": // ! IconNode
      return {
        name: "delete-outline",
        type: "material",
        size: moderateScale(28),
        color: iconDelete,
      } as IconNode;
    case "btnIconContStyle": // ! ViewStyle
      return { marginLeft: moderateScale(5) } as ViewStyle;
    default:
      const unreachable: never = comp;
      throw new Error(`Componente HorarioCard no manejado: ${unreachable}`);
  }
};
