import { View } from "react-native";

import { Divider, Text } from "@rneui/themed";

import { PressHome } from "../components/PressHome";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";
import { Background } from "../components/Background";

// todo |     Implementar una variable 'whereAmI' que guarda un valor que representa la screen en la que se
// todo |      encuentra la aplicación, debe ser dinámica, servirá para seleccionar las opciones que el bottomSheet
// todo |      mostrará: [Horarios (Regular, Especial, Eventual), Rings, Reloj, Batería]

export const HomeScreen = () => {
  // ! Texto estático:
  const staticText = useStaticText()("scrHome");
  // ? Estilos:
  const style = globalStylesComp("Home");

  console.log("hola aacxxxx");
  return (
    <View style={style("mainCont")}>
      <Background>
        <View style={style("titleCont")}>
          <Text h2 style={style("titleText")}>
            {staticText("screenTitle")}
          </Text>
        </View>
        <Divider />
        <View style={style("bodyCont")}>
          <PressHome
            iconUrl={require("../../assets/schedule.png")}
            navTo={staticText("gotoHorarios")}
            title={staticText("btnHorarios")}
          />
          <PressHome
            iconUrl={require("../../assets/bell.png")}
            navTo={staticText("gotoRings")}
            title={staticText("btnRings")}
          />
          <PressHome
            iconUrl={require("../../assets/clock.png")}
            navTo={staticText("gotoReloj")}
            title={staticText("btnReloj")}
          />
          <PressHome
            iconUrl={require("../../assets/battery.png")}
            navTo={staticText("gotoBateria")}
            title={staticText("btnBateria")}
          />
        </View>
      </Background>
    </View>
  );
};
