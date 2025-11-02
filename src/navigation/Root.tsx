import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Horarios } from "../screens/Horarios";
import { Rings } from "../screens/Rings";
import { Reloj } from "../screens/Reloj";
import { Bateria } from "../screens/Bateria";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AppTest from "../comp_test/AppTest";
import { TabsComp } from "../comp_test/TabsComp";
import { Button, Icon, useTheme } from "@rneui/themed";
import { BottomSheetHorarios } from "../components/BottomSheetHorarios";
import { useState } from "react";
import { View } from "react-native";

const RootTabs = createBottomTabNavigator();

export const Root = () => {
  const { theme } = useTheme();
  const [showBottomSheetHorarios, setShowBottomSheetHorarios] = useState(false);

  const handleBottomSheetOptionSelected = (opt: string) => {
    setShowBottomSheetHorarios(false);
    console.log("Opción seleccionada:", opt);
  };

  return (
    <View style={{ flex: 1 }}>
      <RootTabs.Navigator
        initialRouteName="Horarios"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Horarios") {
              return (
                <MaterialCommunityIcons
                  name="list-box-outline"
                  size={26}
                  color={color}
                />
              );
            } else if (route.name === "Rings") {
              return (
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={26}
                  color={color}
                />
              );
            } else if (route.name === "Reloj") {
              return <FontAwesome6 name="clock" size={24} color={color} />;
            } else if (route.name === "Bateria") {
              return (
                <Ionicons name="battery-charging" size={26} color={color} />
              );
            }
          },
          headerTitleStyle: {
            fontSize: 22,
          },
          tabBarIconStyle: {
            marginBottom: 10,
          },
          tabBarShowLabel: false,
          headerShown: true,
        })}
      >
        <RootTabs.Screen
          name="Horarios"
          component={Horarios}
          options={{
            headerRight: () => (
              <Button
                onPress={() =>
                  setShowBottomSheetHorarios(!showBottomSheetHorarios)
                }
              >
                <Icon
                  name="dots-three-vertical"
                  color={theme.colors.grey2}
                  type="entypo"
                />
              </Button>
            ),
          }}
        />
        <RootTabs.Screen name="Rings" component={Rings} />
        <RootTabs.Screen name="Reloj" component={Reloj} />
        <RootTabs.Screen name="Bateria" component={Bateria} />
        <RootTabs.Screen name="Comp" component={AppTest} />
      </RootTabs.Navigator>
      <BottomSheetHorarios
        isVisible={showBottomSheetHorarios}
        onOptionSelected={handleBottomSheetOptionSelected}
      />
    </View>
  );
};
