import { Divider, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { PressHome } from "../components/PressHomeScreen/PressHome";
import { useStaticData } from "../store/static.data";

export const HomeScreen = () => {
  const pressParams = useStaticData({ lang: "spanish" }).homePressParams;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text
          h2
          style={{
            textAlign: "center",
            textShadowColor: "rgba(168, 168, 168, 0.75)", // Color de la sombra
            textShadowOffset: { width: 2, height: 2 }, // Desplazamiento
            textShadowRadius: 5, // Difuminado
          }}
        >
          Timbre Programable
        </Text>
      </View>
      <Divider />
      <View
        style={{
          flex: 7,
          gap: 15,
          paddingBottom: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PressHome pressableParams={pressParams.horarios} />
        <PressHome pressableParams={pressParams.rings} />
        <PressHome pressableParams={pressParams.reloj} />
        <PressHome pressableParams={pressParams.bateria} />
      </View>
    </View>
  );
};
