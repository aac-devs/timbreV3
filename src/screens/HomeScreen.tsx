import { useNavigation } from "@react-navigation/native";
import { Button, Divider, Image, Text, useTheme } from "@rneui/themed";
import { Pressable, View } from "react-native";

export const HomeScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
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
          // gap: 25,
          paddingBottom: 40,
          // justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
          // backgroundColor: "#aaa",
        }}
      >
        <Pressable
          // color="error"
          onPress={() => navigation.navigate("Horarios" as never)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // width: "80%",
            paddingVertical: 10,
            // paddingHorizontal: 20,
            width: "40%",
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.colors.grey3,
            backgroundColor: theme.colors.background,
            elevation: 10,
            // backgroundColor: "pink",
          }}
        >
          <Image
            source={require("../../assets/schedule.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text h4>Horarios</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Rings" as never)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // elevation: 10,
            // width: "80%",
            paddingVertical: 5,
            // paddingHorizontal: 10,
            width: "40%",
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.colors.grey3,
            backgroundColor: theme.colors.background,
            elevation: 10,
            // backgroundColor: "pink",
          }}
        >
          <Image
            source={require("../../assets/bell.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text h4>Rings</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Reloj" as never)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // elevation: 10,
            // width: "80%",
            paddingVertical: 5,
            width: "40%",
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.colors.grey3,
            backgroundColor: theme.colors.background,
            elevation: 10,
            // backgroundColor: "pink",
          }}
        >
          <Image
            source={require("../../assets/clock.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text h4>Reloj</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Bateria" as never)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // elevation: 10,
            // elevation: 0.1,
            // width: "80%",
            paddingVertical: 5,
            width: "40%",
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.colors.grey3,
            backgroundColor: theme.colors.background,
            elevation: 10,
            // backgroundColor: "pink",
          }}
        >
          <Image
            source={require("../../assets/battery.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text h4>Batería</Text>
        </Pressable>
        {/* <Button
          color="error"
          onPress={() => navigation.navigate("Comp" as never)}
        >
          Tests
        </Button> */}
      </View>
    </View>
  );
};
