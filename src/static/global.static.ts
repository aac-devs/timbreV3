import { useLocales } from "expo-localization";

import {
  BateriaScreen,
  HomeScreen,
  HorariosScreen,
  RelojScreen,
  RingsScreen,
  Screens,
  TestsScreen,
} from "./global.static.interface";
import { englishStrings as en } from "./texts/en.global.static.text";
import { spanishStrings as es } from "./texts/es.global.static.text";

export type StaticReturn<T extends Screens> = T extends "scrHome"
  ? (text: HomeScreen) => string
  : T extends "scrHorarios"
  ? <C extends HorariosScreen>(
      text: C
    ) => C extends "diasSemanaLabels" ? string[] : string
  : T extends "scrRings"
  ? (text: RingsScreen) => string
  : T extends "scrReloj"
  ? (text: RelojScreen) => string
  : T extends "scrBateria"
  ? (text: BateriaScreen) => string
  : T extends "scrTests"
  ? (text: TestsScreen) => string
  : never;

const getStaticLang = (lang: "es" | "en") => {
  return (screen: Screens) => (lang === "es" ? es(screen) : en(screen));
};

export const useStaticText = () => {
  const locales = useLocales();
  const lang = locales[0]?.languageCode === "es" ? "es" : "en";
  const source = getStaticLang(lang);

  return <T extends Screens>(screen: T): StaticReturn<T> => {
    return source(screen) as StaticReturn<T>;
  };
};
