import { useLocales } from "expo-localization";

import { HomeScreen, HorariosScreen, Screens } from "./global.static.interface";
import { englishStrings } from "./texts/en.global.static.text";
import { spanishStrings } from "./texts/es.global.static.text";

export type StaticReturn<T extends Screens> = T extends "scrHome"
  ? (text: HomeScreen) => string
  : T extends "scrHorarios"
  ? (text: HorariosScreen) => string
  : never;

const getStaticLang = (lang: "es" | "en") => {
  return (screen: Screens) =>
    lang === "es" ? spanishStrings(screen) : englishStrings(screen);
};

export const useStaticText = () => {
  const locales = useLocales();
  const lang = locales[0]?.languageCode === "es" ? "es" : "en";
  const source = getStaticLang(lang);

  console.log("Lenguaje equipo:", lang, "<---");

  return <T extends Screens>(screen: T): StaticReturn<T> => {
    return source(screen) as StaticReturn<T>;
  };
};
