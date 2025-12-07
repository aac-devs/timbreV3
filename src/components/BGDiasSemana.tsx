import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { useDynamicStore } from "../store/dynamic.store";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";
import { TypeSchedule } from "../store/interfaces/event.interface";

interface Props {
  // * 'regular' | 'especial' | 'eventual'
  scheduleType: TypeSchedule;
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

export const BGDiasSemana = ({ scheduleType }: Props) => {
  // * Estado del componente en el gestor global para leer y actualizar valores según el horario:
  // const { leerDiasSemana, actualizarDiaSemana } = useDynamicData();
  const { readWeekdaysAction, updateWeekdayAction } = useDynamicStore();

  // ! Texto estático:
  const staticText = useStaticText()("scrHorarios");
  // ? Estilos:
  const style = globalStylesComp("Dias");

  return (
    <View style={style("mainCont")}>
      <Text style={style("titleText")}>{staticText("diasParagraph")}</Text>
      <ButtonGroup
        // selectedIndexes={leerDiasSemana(horario)}
        selectedIndexes={readWeekdaysAction(scheduleType)}
        onPress={(valueToUpdate: number[]) => {
          console.log("valueToUpdate:", valueToUpdate);
          updateWeekdayAction({ scheduleType, valueToUpdate });
        }}
        // onPress={(newValue) => {
        //   actualizarDiaSemana({ horario, newValue });
        // }}
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
