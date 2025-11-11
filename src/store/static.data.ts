import { TipoHorario } from "./dynamic.interface";
import { englishData as en, spanishData as es } from "./es.static.data";

type LanguageSel = "spanish" | "english";

type StaticDataProps = {
  lang: LanguageSel;
  horario?: TipoHorario;
};

export const useStaticData = ({ lang, horario }: StaticDataProps) => {
  const diasSemanaTitulo =
    lang === "spanish"
      ? es.horarios.diasSemana.titulo
      : en.horarios.diasSemana.titulo;

  const diasSemanaLabels =
    lang === "spanish"
      ? es.horarios.diasSemana.labels
      : en.horarios.diasSemana.labels;

  const tabItemIconProps =
    lang === "spanish"
      ? horario === "regular"
        ? es.horarios.regular.tabItem.icon
        : horario === "especial"
        ? es.horarios.especial.tabItem.icon
        : es.horarios.eventual.tabItem.icon
      : horario === "regular"
      ? en.horarios.regular.tabItem.icon
      : horario === "especial"
      ? en.horarios.especial.tabItem.icon
      : en.horarios.eventual.tabItem.icon;

  return {
    diasSemanaTitulo,
    diasSemanaLabels,
    tabItemIconProps,
  };
};
