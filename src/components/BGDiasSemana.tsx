import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { TipoHorario } from "../store/dynamic.interface";
import { useDynamicData } from "../store/dynamic.store";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";

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
  // * Estado del componente en el gestor global para leer y actualizar valores según el horario:
  const { leerDiasSemana, actualizarDiaSemana } = useDynamicData();

  // ! Texto estático:
  const staticText = useStaticText()("scrHorarios");
  // ? Estilos:
  const style = globalStylesComp("Dias");

  return (
    <View style={style("mainCont")}>
      <Text style={style("titleText")}>{staticText("diasParagraph")}</Text>
      <ButtonGroup
        selectedIndexes={leerDiasSemana(horario)}
        onPress={(newValue) => {
          actualizarDiaSemana({ horario, newValue });
        }}
        buttons={staticText("diasSemanaLabels")}
        selectMultiple
        containerStyle={style("bgCont")}
        selectedButtonStyle={style("bgSelBtn")}
        buttonStyle={style("bgBtn")}
        selectedTextStyle={style("bgSelText")}
      />
    </View>
  );
};
