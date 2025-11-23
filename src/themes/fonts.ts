import { Platform } from "react-native";

export const fontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  bold: "600" as const,
  heavy: "700" as const,
};

export const tabTextHorarioSize = {
  phone: 12,
  tablet: 12,
};

export const fonts = Platform.select({
  ios: {
    regular: {
      fontFamily: "System",
      fontWeight: fontWeights.regular,
    },
    medium: {
      fontFamily: "System",
      fontWeight: fontWeights.medium,
    },
    bold: {
      fontFamily: "System",
      fontWeight: fontWeights.bold,
    },
    heavy: {
      fontFamily: "System",
      fontWeight: fontWeights.heavy,
    },
  },
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: fontWeights.heavy,
    },
    medium: {
      // Fuente del título del header y de los tabs
      fontFamily: "sans-serif-medium",
      fontWeight: fontWeights.regular,
    },
    bold: {
      fontFamily: "sans-serif",
      fontWeight: fontWeights.regular,
    },
    heavy: {
      fontFamily: "sans-serif",
      fontWeight: fontWeights.regular,
    },
  },
});
