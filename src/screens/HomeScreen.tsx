import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ gap: 20, paddingVertical: 20 }}>
      <Text h2 style={{ textAlign: "center" }}>
        Timbre Programable
      </Text>
      <Button
        color="error"
        onPress={() => navigation.navigate("Horarios" as never)}
      >
        Horarios
      </Button>
      <Button
        color="error"
        onPress={() => navigation.navigate("Rings" as never)}
      >
        Rings
      </Button>
      <Button
        color="error"
        onPress={() => navigation.navigate("Reloj" as never)}
      >
        Reloj
      </Button>
      <Button
        color="error"
        onPress={() => navigation.navigate("Bateria" as never)}
      >
        Batería
      </Button>
      <Button
        color="error"
        onPress={() => navigation.navigate("Comp" as never)}
      >
        Tests
      </Button>
    </View>
  );
};
