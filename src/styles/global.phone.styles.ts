import { useTheme } from "@rneui/themed";
import { fontWeights, tabTextHorarioSize } from "../themes/fonts/fonts";
import { TextStyle, ViewStyle } from "react-native";
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

  // * (3)

  return {
    DiasSemana,
    TabItemHorario,
  };
};
