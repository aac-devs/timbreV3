import {
  ImageStyle,
  PressableStateCallbackType,
  TextStyle,
  ViewStyle,
} from "react-native";

import { TabItem } from "./horario/tabItem.style";
import { Dias } from "./horario/dias.style";
import { DialAction, SpeedDial } from "./horario/dial.style";

import { Home } from "./home/home.style";
import { HomeButtons } from "./home/buttons.style";
import { IconNode } from "@rneui/base";

// ** /////////////////////////////////////////////////////////////////////////////////////////////
// ** /////////////////////////////////////////////////////////////////////////////////////////////

type ElemStyle =
  | "Home"
  | "Dias"
  | "TabItem"
  | "DialAct"
  | "HomeBtns"
  | "SpeedDial";
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

type StyleReturn<T extends ElemStyle> = T extends "Home"
  ? (comp: HomeComps) => ViewStyle | TextStyle
  : T extends "Dias"
  ? (comp: DiasComps) => ViewStyle | TextStyle
  : T extends "TabItem"
  ? (comp: TabItemComps) => ViewStyle | TextStyle
  : T extends "DialAct"
  ? () => TextStyle
  : T extends "HomeBtns"
  ? (comp: HomeBtnComp, state?: PressableStateCallbackType) => ImageStyle | []
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
  : never;

export const globalStylesComp = <T extends ElemStyle>(
  element: T
): StyleReturn<T> => {
  switch (element) {
    // ! HomeScreen Elements
    case "Home":
      return ((comp: HomeComps) => Home(comp)) as StyleReturn<T>;
    case "HomeBtns":
      return ((comp: HomeBtnComp, state?: PressableStateCallbackType) =>
        HomeButtons(comp, state)) as StyleReturn<T>;

    // ! HorariosScreen Elements
    // ? -------> Dias Semana
    case "Dias":
      return ((comp: DiasComps) => Dias(comp)) as StyleReturn<T>;

    // ? -------> Tabs
    case "TabItem":
      return ((comp: TabItemComps) => TabItem(comp)) as StyleReturn<T>;

    // ? -------> Dials
    case "SpeedDial":
      return ((comp: SpeedDialComp) => SpeedDial(comp)) as StyleReturn<T>;
    case "DialAct":
      return (() => DialAction()) as StyleReturn<T>;

    // ! RingsScreen Elements

    // ! RelojScreen Elements

    // ! BateriaScreen Elements

    default:
      const unreachable: never = element;
      throw new Error(`Elemento no implementado: ${unreachable}`);
  }
};
