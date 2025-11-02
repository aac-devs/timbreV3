import { useTheme } from "@react-navigation/native";
import { CheckBox, Chip, Text } from "@rneui/themed";
import { View, Text as RNText } from "react-native";

export const Rings = () => {
  const { colors, fonts } = useTheme();

  console.log(fonts.regular);
  console.log(fonts.medium);
  console.log(fonts.bold);
  console.log(fonts.heavy);
  return (
    <View>
      <RNText style={[fonts.heavy, { color: colors.text, fontSize: 30 }]}>
        Hola AAC
      </RNText>
      <Text h1>Rings</Text>
      <CheckBox checked title="Habilitado" />
    </View>
  );
};
