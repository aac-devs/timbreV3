import { useTheme } from "@rneui/themed";
import { TipoHorario } from "./dynamic.interface";
import { englishData as en, spanishData as es } from "./es.static.data";

type LanguageSel = "spanish" | "english";

type StaticDataProps = {
  lang: LanguageSel;
  horario?: TipoHorario;
};

export const useStaticData = ({ lang, horario }: StaticDataProps) => {
  const { theme } = useTheme();

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
        ? {
            iconProps: {
              ...es.horarios.regular.tabItem.icon,
              color: theme.colors.black,
            },
            title: es.horarios.titulos.regular,
          }
        : horario === "especial"
        ? {
            iconProps: {
              ...es.horarios.especial.tabItem.icon,
              color: theme.colors.black,
            },
            title: es.horarios.titulos.especial,
          }
        : {
            iconProps: {
              ...es.horarios.eventual.tabItem.icon,
              color: theme.colors.black,
            },
            title: es.horarios.titulos.eventual,
          }
      : horario === "regular"
      ? {
          iconProps: {
            ...en.horarios.regular.tabItem.icon,
            color: theme.colors.black,
          },
          title: en.horarios.titulos.regular,
        }
      : horario === "especial"
      ? {
          iconProps: {
            ...en.horarios.especial.tabItem.icon,
            color: theme.colors.black,
          },
          title: en.horarios.titulos.especial,
        }
      : {
          iconProps: {
            ...en.horarios.eventual.tabItem.icon,
            color: theme.colors.black,
          },
          title: en.horarios.titulos.eventual,
        };

  const homePressParams =
    lang === "spanish" ? es.home.pressable : en.home.pressable;

  return {
    diasSemanaTitulo,
    diasSemanaLabels,
    tabItemIconProps,
    homePressParams,
  };
};
