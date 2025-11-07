import { useState } from "react";
import { View } from "react-native";

import { ButtonGroup, Text } from "@rneui/themed";

import { useBGDiasSemana } from "./useBGDiasSemana";

export const BGDiasSemana = () => {
  const p = useBGDiasSemana();

  const [selectedIndexes, setSelectedIndexes] = useState([]);
  return (
    <View style={p.mainContainerStyles}>
      <Text>{p.title}</Text>
      <ButtonGroup
        buttons={p.buttonLabels}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={(value) => {
          setSelectedIndexes(value);
        }}
        containerStyle={p.containerStyle}
        selectedButtonStyle={p.selectedButtonStyle}
        buttonStyle={p.buttonStyle}
        selectedTextStyle={p.selectedTextStyle}
      />
    </View>
  );
};
