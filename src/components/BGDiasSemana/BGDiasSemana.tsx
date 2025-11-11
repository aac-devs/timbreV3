import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { TipoHorario } from "../../store/dynamic.interface";
import { useStaticData } from "../../store/static.data";
import { useDynamicData } from "../../store/dynamic.store";
import { globalStyles } from "../../styles/global.phone.styles";

interface Props {
  // * 'regular' | 'especial' | 'eventual'
  horario: TipoHorario;
}

/**
 * * Vista que incorpora un texto como título y grupo de botones que sirven para activar y desactivar los días de la
 * * semana en los que se ejecutarán los timbres.
 * *
 * * @ejemplo de uso:
 * * <BGDiasSemana horario='regular' />
 * * @Componente Padre:
 * * <Horarios /> (Por el momento, antes de refactorizar el componente Horarios)
 *  */

export const BGDiasSemana = ({ horario }: Props) => {
  // * Textos estáticos según el lenguaje:
  const { diasSemanaTitulo, diasSemanaLabels } = useStaticData({
    lang: "spanish",
  });
  // * Estado del componente en el gestor global para leer y actualizar valores según el horario:
  const { leerDiasSemana, actualizarDiaSemana } = useDynamicData();

  // * (1) Estilos
  const st = globalStyles().DiasSemana;

  return (
    <View style={st.mainContainer}>
      <Text style={st.title}>{diasSemanaTitulo}</Text>
      <ButtonGroup
        selectedIndexes={leerDiasSemana(horario)}
        onPress={(newValue) => {
          actualizarDiaSemana({ horario, newValue });
        }}
        buttons={diasSemanaLabels}
        selectMultiple
        containerStyle={st.bgContainer}
        selectedButtonStyle={st.bgSelectedButton}
        buttonStyle={st.bgButton}
        selectedTextStyle={st.bgSelectedText}
      />
    </View>
  );
};
