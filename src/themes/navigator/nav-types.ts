import { Theme } from "@react-navigation/native";

export type HexColor = `#${string}`;

type GradientColorLevels = {
  high: HexColor;
  medium: HexColor;
  low: HexColor;
};

export interface CustomNavigationTypes extends Theme {
  colors: Theme["colors"] & {
    gradientColors?: GradientColorLevels;
  };
  fonts: Theme["fonts"];
  dark: boolean;
}
