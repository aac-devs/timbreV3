import { TipoHorario } from "./dynamic.interface";
import { englishData, spanishData } from "./es.static.data";

type LanguageSel = "spanish" | "english";

export const useStaticData = (lang: LanguageSel) => {
  const diasSemanaTitulo =
    lang === "spanish"
      ? spanishData.horarios.diasSemana.titulo
      : englishData.horarios.diasSemana.titulo;

  const diasSemanaLabels =
    lang === "spanish"
      ? spanishData.horarios.diasSemana.labels
      : englishData.horarios.diasSemana.labels;

  return {
    diasSemanaTitulo,
    diasSemanaLabels,
  };
};
