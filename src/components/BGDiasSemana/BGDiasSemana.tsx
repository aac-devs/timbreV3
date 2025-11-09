import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { useColorFontBGDiasSemana } from "./useColorFontBGDiasSemana";

import { TipoHorario } from "../../store/dynamic.interface";
import { useStaticData } from "../../store/static.data";
import { useDynamicData } from "../../store/dynamic.store";

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
  // * Definición de estilos para el componente:
  const st = useColorFontBGDiasSemana();
  // * Textos estáticos según el lenguaje:
  const { diasSemanaTitulo, diasSemanaLabels } = useStaticData("spanish");
  // * Estado del componente en el gestor global para leer y actualizar valores según el horario:
  const { leerDiasSemana, actualizarDiaSemana } = useDynamicData();

  return (
    <View style={st.mainContainerStyles}>
      <Text>{diasSemanaTitulo}</Text>
      <ButtonGroup
        selectedIndexes={leerDiasSemana(horario)}
        onPress={(newValue) => {
          actualizarDiaSemana({ horario, newValue });
        }}
        buttons={diasSemanaLabels}
        selectMultiple
        containerStyle={st.containerStyle}
        selectedButtonStyle={st.selectedButtonStyle}
        buttonStyle={st.buttonStyle}
        selectedTextStyle={st.selectedTextStyle}
      />
    </View>
  );
};
