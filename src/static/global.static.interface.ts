export type Screens =
  | "scrHome"
  | "scrHorarios"
  | "scrRings"
  | "scrReloj"
  | "scrBateria"
  | "global";

export type HomeScreen =
  | "screenTitle"
  | "btnHorarios"
  | "btnRings"
  | "btnReloj"
  | "btnBateria"
  | "gotoHorarios"
  | "gotoRings"
  | "gotoReloj"
  | "gotoBateria";

export type HorariosScreen =
  | "navTitle"
  | "tabRegularTitle"
  | "tabEspecialTitle"
  | "tabEventualTitle"
  | "diasParagraph"
  | "diasSemanaLabels"
  | "dialEntrada"
  | "dialClase"
  | "dialDescanso"
  | "dialSalida";

export type RingsScreen = "navTitle";

export type RelojScreen = "navTitle";

export type BateriaScreen = "navTitle";

export type GlobalScreen = "bottomTitle" | "bottomIconName" | "bottomIconType";
