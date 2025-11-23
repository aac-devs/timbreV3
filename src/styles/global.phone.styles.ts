import {
  ImageStyle,
  PressableStateCallbackType as PSCB,
  TextStyle,
  ViewStyle,
} from "react-native";

import { TabItem } from "./horario/tabItem.style";
import { Dias } from "./horario/dias.style";
import { DialAction, SpeedDial } from "./horario/dial.style";

import { Home } from "./home/home.style";
import { HomeButtons } from "./home/buttons.style";
import { IconNode } from "@rneui/base";
import { Fondo } from "./global/background.style";
import { useTheme } from "@rneui/themed";
import { useTheme as navUseTheme } from "@react-navigation/native";
import { CustomNavigationTypes as CNT } from "../themes/navigator/nav-types";

// ** /////////////////////////////////////////////////////////////////////////////////////////////
// ** /////////////////////////////////////////////////////////////////////////////////////////////

type ElemStyle =
  | "Home"
  | "Dias"
  | "TabItem"
  | "DialAct"
  | "HomeBtns"
  | "SpeedDial"
  | "Fondo";
type Common = "mainCont" | "titleText";

export type HomeComps = Common | "titleCont" | "bodyCont";
export type DiasComps = Common | "bgCont" | "bgSelBtn" | "bgBtn" | "bgSelText";
export type TabItemComps = "indicator" | "titleText";
export type HomeBtnComp = "pressable" | "image";
export type SpeedDialComp =
  | "icon"
  | "openIcon"
  | "color"
  | "overlayColor"
  | "compStyle";
export type FondoProps = "colors" | "compStyle" | "start" | "end";

type StyleReturn<T extends ElemStyle> = T extends "Home"
  ? (comp: HomeComps) => ViewStyle | TextStyle
  : T extends "Dias"
  ? (comp: DiasComps) => ViewStyle | TextStyle
  : T extends "TabItem"
  ? (comp: TabItemComps) => ViewStyle | TextStyle
  : T extends "DialAct"
  ? () => TextStyle
  : T extends "HomeBtns"
  ? (comp: HomeBtnComp, state?: PSCB) => ImageStyle | []
  : T extends "SpeedDial"
  ? <C extends SpeedDialComp>(
      comp: C
    ) => C extends "icon" | "openIcon"
      ? IconNode
      : C extends "color" | "overlayColor"
      ? string
      : C extends "compStyle"
      ? ViewStyle
      : never
  : T extends "Fondo"
  ? <C extends FondoProps>(
      comp: C,
      theme: CNT
    ) => C extends "colors"
      ? []
      : C extends "compStyle"
      ? ViewStyle
      : C extends "start" | "end"
      ? { x: number; y: number }
      : never
  : never;

export const globalStylesComp = <T extends ElemStyle>(
  el: T
): StyleReturn<T> => {
  const RNEColors = useTheme().theme.colors;
  const colors = navUseTheme();

  // console.log("global styles comppp"); // ? Usado para refrescar HomeButtons
  switch (el) {
    // ! Global Elements
    case "Fondo": // ?? theme ok
      return ((comp: FondoProps) => Fondo(comp, colors)) as StyleReturn<T>;

    // ! HomeScreen Elements
    case "Home": // ?? ok (no usa theme)
      return ((comp: HomeComps) => Home(comp)) as StyleReturn<T>;
    case "HomeBtns": // ?? theme ok ------------
      return ((comp: HomeBtnComp, state?: PSCB) =>
        HomeButtons(comp, RNEColors, state)) as StyleReturn<T>;

    // ! HorariosScreen Elements
    // ? -------> Dias Semana
    case "Dias": // ?? theme ok ---------------
      return ((comp: DiasComps) => Dias(comp, RNEColors)) as StyleReturn<T>;

    // ? -------> Tabs
    case "TabItem": // ?? theme ok -------------
      return ((comp: TabItemComps) =>
        TabItem(comp, RNEColors)) as StyleReturn<T>;

    // ? -------> Dials
    case "SpeedDial": // ?? theme ok -------------
      return ((comp: SpeedDialComp) =>
        SpeedDial(comp, RNEColors)) as StyleReturn<T>;
    case "DialAct":
      return (() => DialAction()) as StyleReturn<T>;

    // ! RingsScreen Elements

    // ! RelojScreen Elements

    // ! BateriaScreen Elements

    default:
      const unreachable: never = el;
      throw new Error(`Elemento no implementado: ${unreachable}`);
  }
};
