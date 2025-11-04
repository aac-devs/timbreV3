import { ButtonGroup, Divider, Text, useTheme } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import { fontWeights } from "../themes/fonts/fonts";

export const WeekDays = () => {
  const { theme } = useTheme();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  return (
    <View
      style={{
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        gap: 5,
        paddingTop: 10,
        // marginBottom: 10,
        // backgroundColor: "pink",
      }}
    >
      <Text>Días de activación del horario</Text>
      <ButtonGroup
        buttons={["D", "L", "M", "X", "J", "V", "S"]}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={(value) => {
          setSelectedIndexes(value);
        }}
        containerStyle={{ marginBottom: 20 }}
        selectedButtonStyle={{
          backgroundColor: theme.colors.secondary,
        }}
        buttonStyle={{
          backgroundColor: theme.colors.background,
        }}
        selectedTextStyle={{
          fontWeight: fontWeights.heavy,
          color: theme.colors.white,
        }}
      />
    </View>
  );
};
