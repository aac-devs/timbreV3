import { Badge, Tab, Text } from "@rneui/themed";

import { TipoHorario } from "../../store/dynamic.interface";
import { globalStyles } from "../../styles/global.phone.styles";
import { useStaticData } from "../../store/static.data";
import { View } from "react-native";

interface Props {
  // * 'regular' | 'especial' | 'eventual'
  horario: TipoHorario;
  enviado: boolean;
}

/**
 * * Componente TabItem que incorpora un texto como título, un ícono y un badge que indicará si se guardó o no el horario en el timbre
 * *
 * * @ejemplo de uso:
 * * <TabItemHorario horario="regular" enviado={true} />
 * * @Componente Padre:
 * * <Horarios /> (Por el momento, antes de refactorizar el componente Horarios)
 *  */

export const TabItemHorario = ({ horario, enviado }: Props) => {
  // * Textos estáticos según el lenguaje:
  const sta = useStaticData({ lang: "spanish", horario });

  // * (2) Estilos
  const st = globalStyles().TabItemHorario;

  // * Título del TabItem Capitalizado:
  const title = horario.replace(/^./, (letra) => letra.toUpperCase());

  return (
    <View
      style={{ backgroundColor: "yellow" }}
      // icon={{ ...sta.tabItemIconProps, color: st.tabIcon.color }}
      // title={horario}
    >
      {/* <Badge
        status={enviado ? "success" : "error"}
        containerStyle={st.tabBadgeContainer}
      /> */}
      {/* <Text style={st.tabTitle}>{title}</Text> */}
    </View>

    // <Tab.Item
    //   icon={{ ...sta.tabItemIconProps, color: st.tabIcon.color }}
    //   title={horario}
    // >
    //   {/* <Badge
    //     status={enviado ? "success" : "error"}
    //     containerStyle={st.tabBadgeContainer}
    //   /> */}
    //   {/* <Text style={st.tabTitle}>{title}</Text> */}
    // </Tab.Item>
  );
};
