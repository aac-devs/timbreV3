import { useState } from "react";
import { View } from "react-native";

import { Button, Icon, useTheme } from "@rneui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { Horarios } from "../screens/Horarios";
import { Rings } from "../screens/Rings";
import { Reloj } from "../screens/Reloj";
import { Bateria } from "../screens/Bateria";

import { BottomSheetHorarios } from "../components/BottomSheetHorarios";
import { useStaticText } from "../static/global.static";
// import AppTest from "../comp_test/AppTest";

export type RootStackParamList = {
  home: undefined;
  horarios: undefined;
  rings: undefined;
  reloj: undefined;
  bateria: undefined;
  Comp: undefined;
};

const RootTabs = createNativeStackNavigator<RootStackParamList>();

export const NativeRoot = () => {
  const { theme } = useTheme();
  const [showBottomSheetHorarios, setShowBottomSheetHorarios] = useState(false);

  // ! Texto estático:
  const titleHorarios = useStaticText()("scrHorarios")("navTitle");
  const titleRings = useStaticText()("scrRings")("navTitle");
  const titleReloj = useStaticText()("scrReloj")("navTitle");
  const titleBateria = useStaticText()("scrBateria")("navTitle");

  const handleBottomSheetOptionSelected = (opt: string) => {
    setShowBottomSheetHorarios(false);
    console.log("Opción seleccionada:", opt);
  };

  const buttonRight = () => (
    <Button
      style={{ backgroundColor: "lime" }}
      onPress={() => setShowBottomSheetHorarios(!showBottomSheetHorarios)}
    >
      <Icon
        name="dots-three-vertical"
        color={theme.colors.grey2}
        type="entypo"
      />
    </Button>
  );

  return (
    <View style={{ flex: 1 }}>
      <RootTabs.Navigator
        initialRouteName="home"
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
        //   headerTitleStyle: {
        //     fontSize: 22,
        //   },
        //   tabBarShowLabel: true,
        //   headerShown: true,
        // })}
      >
        <RootTabs.Screen
          name="horarios"
          component={Horarios}
          options={{
            title: `${titleHorarios}`,
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
            headerRight: buttonRight,
          }}
        />
        <RootTabs.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootTabs.Screen
          name="rings"
          component={Rings}
          options={{ title: `${titleRings}`, headerRight: buttonRight }}
        />
        <RootTabs.Screen
          name="reloj"
          component={Reloj}
          options={{ title: `${titleReloj}`, headerRight: buttonRight }}
        />
        <RootTabs.Screen
          name="bateria"
          component={Bateria}
          options={{ title: `${titleBateria}`, headerRight: buttonRight }}
        />
        {/* <RootTabs.Screen name="Comp" component={AppTest} /> */}
      </RootTabs.Navigator>
      <BottomSheetHorarios
        isVisible={showBottomSheetHorarios}
        onOptionSelected={handleBottomSheetOptionSelected}
      />
    </View>
  );
};
