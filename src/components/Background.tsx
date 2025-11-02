import { useTheme } from "@react-navigation/native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { CustomNavigationTypes } from "../themes/navigator/nav-types";

interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
  const {
    colors: { gradientColors },
  }: CustomNavigationTypes = useTheme();

  console.log(gradientColors);
  return (
    <LinearGradient
      // colors={["#14191cff", "#242e33ff", "#445862ff"]}
      colors={[
        gradientColors?.high ? gradientColors.high : "#0f0d0fff",
        gradientColors?.medium ? gradientColors.medium : "#1a161aff",
        gradientColors?.low ? gradientColors.low : "#231c22ff",
      ]}
      style={{ flex: 1, alignItems: "stretch", padding: 10 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};
