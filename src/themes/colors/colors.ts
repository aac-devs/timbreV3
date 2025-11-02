import { HexColor } from "../navigator/nav-types";

interface AppColors {
  dark: {
    background: HexColor | string;
    text: HexColor | string;
    highlight: HexColor | string;
    bgHigh: HexColor;
    bgMed: HexColor;
    bgLow: HexColor;
  };
  light: {
    background: HexColor;
    text: HexColor;
    highlight: HexColor;
    bgHigh: HexColor;
    bgMed: HexColor;
    bgLow: HexColor;
  };
}

export const colors: AppColors = {
  dark: {
    background: "#222",
    text: "#ccc",
    highlight: "orange",
    bgHigh: "#111f",
    bgMed: "#333f",
    bgLow: "#111f",
  },
  light: {
    background: "#eee",
    text: "#222",
    highlight: "#00f",
    bgHigh: "#ffff",
    bgMed: "#dddf",
    bgLow: "#ffff",
  },
};
