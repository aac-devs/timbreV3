import { View } from "react-native";

import { Divider, Text } from "@rneui/themed";

import { PressHome } from "../components/PressHomeScreen/PressHome";
import { globalStylesComp } from "../styles/global.phone.styles";
import { useStaticText } from "../static/global.static";
import { Background } from "../components/Background";

export const HomeScreen = () => {
  const style = globalStylesComp("Home");
  const staticText = useStaticText()("scrHome");

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
