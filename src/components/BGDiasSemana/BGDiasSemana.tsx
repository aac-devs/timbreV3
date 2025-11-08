import { useEffect, useState } from "react";
import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { useBGDiasSemana } from "./useBGDiasSemana";
import { BGDiasSemanaProps } from "./BGDiasSemana.props";
import { DiaSemanaNumero } from "../../store/dynamic.interface";

export const BGDiasSemana = ({
  horario,
  state,
  onChange,
}: BGDiasSemanaProps) => {
  const p = useBGDiasSemana();
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    console.log("useEffect Días Semana");
    let sel: number[] = [];
    Object.entries(state).forEach((item, index) => {
      const [dia, state] = item;
      if (state) {
        console.log("----");
        sel.push(index);
      }
      console.log(dia, "..", state, "...", index);
    });
    console.log("final::");
    console.log({ sel });
    setSelectedIndexes(sel as never);
  }, [state]);

  return (
    <View style={p.mainContainerStyles}>
      <Text>Días de activación del horario</Text>
      <ButtonGroup
        buttons={["D", "L", "M", "X", "J", "V", "S"]}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={(value) => {
          console.log("Día presionado");
          console.log(value);
          console.log(typeof value);
          onChange(horario, value[0], true);
        }}
        containerStyle={p.containerStyle}
        selectedButtonStyle={p.selectedButtonStyle}
        buttonStyle={p.buttonStyle}
        selectedTextStyle={p.selectedTextStyle}
      />
    </View>
  );
};
