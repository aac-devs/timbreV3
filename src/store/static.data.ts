import { useTheme } from "@rneui/themed";
import { TipoHorario } from "./dynamic.interface";
import { englishData as en, spanishData as es } from "./es.static.data";
import { DialOptions } from "./es.static.interface";

type LanguageSel = "spanish" | "english";

export const useStaticData = (lang: LanguageSel) => {
  const { theme } = useTheme();

  const language = lang === "spanish" ? es : en;

  return function (
    horario: TipoHorario = "regular",
    dialOpt: DialOptions = "entrada"
  ) {
    const diasSemanaTitulo = language.horarios.diasSemana.titulo;
    const diasSemanaLabels = language.horarios.diasSemana.labels;
    const homePressParams = language.home.pressable;
    const appTitle = language.appTitle;
    const dialOption = language.horarios.dialButtons[dialOpt];

    const tabItemIconProps = {
      iconProps: {
        ...language.horarios[horario].tabItem.icon,
        color: theme.colors.black,
      },
      title: language.horarios.titulos[horario],
    };

    return {
      appTitle,
      diasSemanaTitulo,
      diasSemanaLabels,
      tabItemIconProps,
      homePressParams,
      dialOption,
    };
  };
};
