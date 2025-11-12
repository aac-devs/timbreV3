import { useTheme } from "@rneui/themed";
import { fontWeights, tabTextHorarioSize } from "../themes/fonts/fonts";
import {
  ImageStyle,
  PressableStateCallbackType,
  TextStyle,
  ViewStyle,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

export const globalStyles = () => {
  const { theme } = useTheme();
  // * (1) DBDiasSemana
  const DiasSemana = {
    mainContainer: {
      width: "80%",
      justifyContent: "center",
      alignSelf: "center",
      gap: moderateScale(10),
      paddingTop: moderateScale(10),
    } as ViewStyle,
    title: {
      fontSize: moderateScale(14),
    } as TextStyle,
    bgContainer: { marginBottom: moderateScale(20) } as ViewStyle,
    bgSelectedButton: { backgroundColor: theme.colors.secondary } as ViewStyle,
    bgButton: { backgroundColor: theme.colors.background } as ViewStyle,
    bgSelectedText: {
      fontSize: moderateScale(12),
      fontWeight: fontWeights.heavy,
      color: theme.colors.white,
    } as TextStyle,
  };

  // * (2) TabItemHorario
  const TabItemHorario = {
    tabIcon: { color: theme.colors.grey2 } as TextStyle,
    tabBadgeContainer: {
      position: "absolute",
      top: moderateScale(10),
      left: moderateScale(70),
    } as ViewStyle,
    tabTitle: {
      fontSize: tabTextHorarioSize.phone,
      color: theme.colors.grey2,
      fontWeight: fontWeights.heavy,
    } as TextStyle,
  };

  // * (3) PressHome
  const PressHome = {
    pressable: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: moderateScale(10),
      width: "40%",
      alignSelf: "center",
      borderWidth: 1,
      borderRadius: moderateScale(10),
      borderColor: theme.colors.grey3,
      elevation: 10,
    } as ViewStyle,
    pressablePressed: {} as ViewStyle,
    image: {
      width: moderateScale(70),
      height: moderateScale(70),
    } as ImageStyle,
  };

  const fnPressHome = (state: PressableStateCallbackType) => [
    {
      backgroundColor: state.pressed
        ? theme.colors.grey4
        : theme.colors.background,
    },
    PressHome.pressable,
  ];

  return {
    DiasSemana,
    TabItemHorario,
    PressHome,
    fnPressHome,
  };
};
