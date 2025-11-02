import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Horarios } from "../screens/Horarios";
import { Rings } from "../screens/Rings";
import { Reloj } from "../screens/Reloj";
import { Bateria } from "../screens/Bateria";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const RootTabs = createBottomTabNavigator();

export const Root = () => {
  return (
    <RootTabs.Navigator
      initialRouteName="Horarios"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Horarios") {
            return (
              <MaterialCommunityIcons
                name="list-box-outline"
                size={30}
                color={color}
              />
            );
          } else if (route.name === "Rings") {
            return (
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={30}
                color={color}
              />
            );
          } else if (route.name === "Reloj") {
            return <FontAwesome6 name="clock" size={28} color={color} />;
          } else if (route.name === "Bateria") {
            return <Ionicons name="battery-charging" size={30} color={color} />;
          }
        },
        headerTitleStyle: {
          fontSize: 22,
        },
        tabBarIconStyle: {
          width: 60,
          height: 60,
        },
        tabBarStyle: [{ height: 120 }],
        tabBarShowLabel: false,
        headerShown: true,
      })}
    >
      <RootTabs.Screen name="Horarios" component={Horarios} />
      <RootTabs.Screen name="Rings" component={Rings} />
      <RootTabs.Screen name="Reloj" component={Reloj} />
      <RootTabs.Screen name="Bateria" component={Bateria} />
    </RootTabs.Navigator>
  );
};
