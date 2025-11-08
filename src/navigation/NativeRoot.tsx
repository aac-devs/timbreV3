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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Horarios: undefined;
  Rings: undefined;
  Reloj: undefined;
  Bateria: undefined;
  Comp: undefined;
};

const RootTabs = createNativeStackNavigator<RootStackParamList>();

export const NativeRoot = () => {
  const { theme } = useTheme();
  const [showBottomSheetHorarios, setShowBottomSheetHorarios] = useState(false);
  const aacTitle: string = "Estoy enviando algo... AAC";

  const handleBottomSheetOptionSelected = (opt: string) => {
    setShowBottomSheetHorarios(false);
    console.log("Opción seleccionada:", opt);
  };

  return (
    <View style={{ flex: 1 }}>
      <RootTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            // backgroundColor: "#ccc",
          },
          // headerTintColor: "red",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     if (route.name === "Horarios") {
        //       return (
        //         <MaterialCommunityIcons
        //           name="list-box-outline"
        //           size={28}
        //           color={color}
        //         />
        //       );
        //     } else if (route.name === "Rings") {
        //       return (
        //         <MaterialCommunityIcons
        //           name="bell-ring-outline"
        //           size={28}
        //           color={color}
        //         />
        //       );
        //     } else if (route.name === "Reloj") {
        //       return <FontAwesome6 name="clock" size={26} color={color} />;
        //     } else if (route.name === "Bateria") {
        //       return (
        //         <Ionicons name="battery-charging" size={28} color={color} />
        //       );
        //     }
        //   },
        //   headerTitleStyle: {
        //     fontSize: 22,
        //   },
        //   tabBarShowLabel: true,
        //   headerShown: true,
        // })}
      >
        <RootTabs.Screen
          name="Horarios"
          component={Horarios}
          options={{
            // headerBackground: () => (
            //   <View
            //     style={{
            //       backgroundColor: "pink",
            //       // height: "100%",
            //       width: "60%",
            //       justifyContent: "flex-end",
            //       alignItems: "flex-end",
            //       alignSelf: "center",
            //       flexDirection: "row",
            //       gap: 20,
            //       // paddingBottom: 10,
            //     }}
            //   >
            //     {/* //! themificar estos íconos, estados también */}
            //     <Icon name="app-registration" size={30} color="orangered" />
            //     <Icon name="bluetooth" size={30} color="#555" />
            //   </View>
            // ),
            headerRight: () => (
              <Button
                style={{ backgroundColor: "lime" }}
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
        <RootTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
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
